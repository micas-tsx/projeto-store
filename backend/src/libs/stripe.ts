import Stripe from "stripe"
import { getProduct } from "../services/product"
import type { CartItem } from "../types/cart-item"
import { getStripeSecretKey } from "../utils/get-stripe-secret-key"
import { getFrontendUrl } from "../utils/get-frontend-url"


export const stripe = new Stripe(getStripeSecretKey())

type StripeCkeckouSessionParams =  {
  cart: CartItem[]
  shippingCost: number
  orderId: number
}

export const createStripeCheckouSession = async ({ cart, shippingCost, orderId }: StripeCkeckouSessionParams) => {
  let stripeLineItems = []

    for(let item of cart) {
      const product = await getProduct(item.productId) 
      if(product) {
        stripeLineItems.push({
          price_data: {
            product_data: {
              name: product.label,
            },
            currency: 'BRL',
            unit_amount: Math.round(product.price * 100)
          },
          quantity: item.quantity
        })
      }
    }

  if(shippingCost > 0) {
    stripeLineItems.push({
      price_data: {
        product_data: {
          name: 'Frete',
        },
        currency: 'BRL',
        unit_amount: Math.round(shippingCost * 100)
      },
      quantity: 1
    })
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeLineItems,
    mode: 'payment',
    metadata: { orderId: orderId.toString() },
    success_url: `${getFrontendUrl()}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${getFrontendUrl()}/my-orders`, 
  })

  return session
}