import type { RequestHandler } from "express";
import { getOrderBySessionIdSchema } from "../schema/get-order-by-session-id-schema";
import { getOrderIdFromSession } from "../services/payment";
import { getOrderById, getUserOrders } from "../services/order";
import { getOrderSchema } from "../schema/get-order-schema";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";

export const getOrderBySessionId: RequestHandler = async(req, res) => {
  const result = getOrderBySessionIdSchema.safeParse(req.query);
  if(!result.success) {
    res.status(400).json({erro: 'session id não enviado'})
    return
  }
  const { session_id } = result.data;

  const orderId = await getOrderIdFromSession(session_id);
  if(!orderId) {
    res.status(404).json({erro: 'ocorreu um erro'})
    return
  }

  res.json({
    erro: null,
    orderId
  })
}

export const listOrders: RequestHandler = async(req, res) => {
  const userId = (req as any).userId
  if(!userId) {
    res.status(401).json({erro: 'usuário não autenticado'})
    return
  }

  const orders = await getUserOrders(userId)

  res.json({ erro: null, orders })
}

export const getOrder: RequestHandler = async(req, res) => {
  const userId = (req as any).userId
  if(!userId) {
    res.status(401).json({erro: 'usuário não autenticado'})
    return
  }
  
  const result = getOrderSchema.safeParse(req.params);
  if(!result.success) {
    res.status(400).json({erro: 'id inválido'})
    return
  }

  const { id } = result.data;

  const order = await getOrderById(parseInt(id), userId)
  if(!order) {
    res.status(404).json({erro: 'pedido não encontrado'})
    return
  }

  const itemsWithAbsoluteUrl = order.orderItems.map(item => ({
    ...item,
    product: {
      ...item.product,
      image: item.product.image ? getAbsoluteImageUrl(item.product.image) : null
    }
  }))

  res.json({ 
    erro: null, 
    order: {
      ...order,
      orderItems: itemsWithAbsoluteUrl
    }
  })
}