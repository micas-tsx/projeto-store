import type { CartItem } from "../types/cart-item"
import { createStripeCheckouSession } from "../libs/stripe"

type CreatePaymentParams =  {
  cart: CartItem[]
  shippingCost: number
  orderId: number
}

export const createPaymentLink = async ({ cart, shippingCost, orderId }: CreatePaymentParams) => {
  try{
    console.log('🔄 Criando link de pagamento para pedido:', orderId)
    console.log('📦 Itens no carrinho:', cart.length)
    console.log('🚚 Custo do frete:', shippingCost)
    
    const session = await createStripeCheckouSession({ cart, shippingCost, orderId })
    
    if(!session.url) {
      console.error('❌ Sessão Stripe criada mas sem URL')
      return null
    }

    console.log('✅ Link de pagamento criado com sucesso')
    return session.url
  } catch (error) {
    console.error('❌ Erro ao criar link de pagamento:', error)
    return null
  }
}