import type { RequestHandler } from "express";
import { cartMountSchema } from "../schema/cart-mount-schema";
import { getProduct } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";
import { calculateShippingSchema } from "../schema/calculate-shipping-schema";
import { cartFinishSchema } from "../schema/cart-finis-schema";
import { getAddressById } from "../services/user";
import { createOrder } from "../services/ortder";

export const cartMount: RequestHandler = async (req,res) => {
  const parseResult = cartMountSchema.safeParse(req.body)
  if(!parseResult.success) {
    res.status(400).json({ erro: "array de ids inválidos" })
    return
  }
  const { ids } = parseResult.data
  
  let products = []
  for(let id of ids) {
    const product = await getProduct(id)
    if(product) {
      products.push({
        id: product.id,
        label: product.label,
        price: product.price,
        image: product.images[0] ? getAbsoluteImageUrl(product.images[0]) : null
      })
    }
  }

  res.json({ erro: null, products })
}

export const calculateShipping: RequestHandler = (req,res) => {
  const parseResult = calculateShippingSchema.safeParse(req.query)
  if(!parseResult.success) {
    res.status(400).json({ erro: 'CEP inválido' })
    return
  }
  const { zipcode } = parseResult.data


  res.json({ erro: null,zipcode, cost: 7, days: 3 })
}

export const finish: RequestHandler = async(req,res) => {
  const userId = (req as any).userId
  if(!userId) {
    res.status(401).json({ erro: 'acesso negado' })
    return
  }

  const result = cartFinishSchema.safeParse(req.body)
  if(!result.success) {
    res.status(400).json({ erro: 'carrinnho inexistente' })
    return
  }

  const { cart, addressId } = result.data

  const address = await getAddressById(userId, addressId)
  if(!address) {
    res.status(400).json({ erro: 'endereço inválido' })
    return
  }

  const shippingCost = 7
  const shippingDays = 3

  const orderId = await createOrder({
    userId,
    address,
    shippingCost,
    shippingDays,
    cart
  })

  // integrar meio de pagamento
  let url = ''

  res.status(201).json({ erro: null, url })
}