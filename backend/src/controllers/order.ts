import type { RequestHandler } from "express";
import { getOrderBySessionIdSchema } from "../schema/get-order-by-session-id-schema";
import { getOrderIdFromSession } from "../services/payment";
import { getUserOrders } from "../services/order";

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