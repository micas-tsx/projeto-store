import { prisma } from "../libs/prisma"
import type { Address } from "../types/address"
import type { CartItem } from "../types/cart-item"
import { getProduct } from "./product"

type CreateOrderParams = {
  userId: number
  address: Address
  shippingCost: number
  shippingDays: number
  cart: CartItem[]
}

export const createOrder = async ({ userId, address, shippingCost, shippingDays, cart }: CreateOrderParams) => {
  let total = 0
  let orderItems = []

  for(let cartItem of cart ) {
    const product = await getProduct(cartItem.productId)
    if(product) {
      total += product.price * cartItem.quantity
    
      orderItems.push({
        productId: product.id,
        quantity: cartItem.quantity,
        price: product.price
      })
    }
  }

  const order = await prisma.order.create({
    data: {
      userId,
      total,
      shippingCost,
      shippingDays,
      shippingZipcode: address.zipcode,
      shippingStreet: address.street,
      shippingNumber: address.number,
      shippingCity: address.city,
      shippingState: address.state,
      shippingCountry: address.country,
      shippingComplement: address.complement,
      orderItems: { create: orderItems }
    }
  })

  if(!order) {
    return null
  }
  return order.id
}