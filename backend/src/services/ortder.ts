import type { Address } from "../types/address"
import type { CartItem } from "../types/cart-item"

type CreateOrderParams = {
  userId: number
  address: Address
  shippingCost: number
  shippingDays: number
  cart: CartItem[]
}

export const createOrder = async ({ userId, address, shippingCost, shippingDays, cart }: CreateOrderParams) => {

}