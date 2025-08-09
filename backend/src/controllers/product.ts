import type { RequestHandler } from "express";
import { getProductSchema } from "../schema/get-product-schema";
import { getAllProduct } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";

export const getProducts: RequestHandler = async (req, res) => {
  const parseResult = getProductSchema.safeParse(req.query)

  if(!parseResult.success) {
    return res.status(400).json({ erro: 'parâmetros inválidos' })
  }

  const { metadata, orderBy, limit } = parseResult.data
  
  const parsedLimit  = limit ? parseInt(limit) : undefined
  const parsedMetadata  = metadata ? JSON.parse(metadata) : undefined

  const products = await getAllProduct({
    metadata: parsedMetadata,
    order: orderBy,
    limit: parsedLimit
  })

  const productsWithAbsoluteUrl = products.map(product => ({
    ...product,
    image: product.image ? getAbsoluteImageUrl(product.image) : null,
    liked: false
  }))

  res.json({ erro: null, products: productsWithAbsoluteUrl })
}