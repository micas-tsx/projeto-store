import type { RequestHandler } from "express";
import { getStripeWebhookSecret } from "../utils/get-stripe-webhook-secret";
import { getConstructEvent } from "../libs/stripe";
import { updatedOrderStatus } from "../services/order";

export const stripe: RequestHandler = async (req, res) => {
  const sig = req.headers['stripe-signature'] as string
  const webhookKey = getStripeWebhookSecret()
  const rawBody = req.body

  const event = await getConstructEvent(rawBody, sig, webhookKey)
  if(event) {
    const session = event.data.object as any
    const orderId = parseInt(session.metadata?.orderId)

    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded':
        // deu tudo certo
        await updatedOrderStatus(orderId, 'paid')
        break;
      case 'checkout.session.expired':
      case 'checkout.session.async_payment_failed':
        // deu ruim
        await updatedOrderStatus(orderId, 'cancelled')
        break
    } 
  }
  res.json({ erro: null })
}