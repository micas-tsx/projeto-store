import type { RequestHandler } from "express";
import { cartMountSchema } from "../schema/cart-mount-schema";
import { getProduct } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";

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