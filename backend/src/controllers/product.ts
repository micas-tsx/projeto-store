import type { RequestHandler } from "express";
import { getProductSchema } from "../schema/get-product-schema";

export const getProducts: RequestHandler = async (req, res) => {
  const parseResult = getProductSchema.safeParse(req.query)

  if(!parseResult.success) {
    return res.status(400).json({ erro: 'parâmetros inválidos' })
  }

  const { metadata, orderby, limit } = parseResult.data
  
  const parsedLimit  = limit ? parseInt(limit) : undefined
  const parsedMetadata  = metadata ? JSON.parse(metadata) : undefined


  res.json({ erro: null })
}