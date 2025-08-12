import type { CartItem } from "../types/cart-item"
import { createStripeCheckouSession, getStripeCheckoutSession } from "../libs/stripe"

type CreatePaymentParams =  {
  cart: CartItem[]
  shippingCost: number
  orderId: number
}

export const createPaymentLink = async ({ cart, shippingCost, orderId }: CreatePaymentParams) => {
  try{ 
    const session = await createStripeCheckouSession({ cart, shippingCost, orderId })
    if(!session.url) return null
    return session.url
  } catch {
    return null
  }
}

export const getOrderIdFromSession = async(sessionId: string) => {
  try{
    const session = await getStripeCheckoutSession(sessionId)
    const orderId = session.metadata?.orderId

    if(!orderId) return null

    return parseInt(orderId)
  } catch {
    return null
  }
}