import type { RequestHandler } from "express";
import { getProductSchema } from "../schema/get-product-schema";
import { getAllProduct, getProduct, incrementProductView } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";
import { getOneProductSchema } from "../schema/get-one-product";
import { getCategory } from "../services/category";

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

export const getOneProduct: RequestHandler = async (req, res) => {
  const paramsResult = getOneProductSchema.safeParse(req.params)
  if(!paramsResult.success) {
    res.json(400).json({ erro: 'parâmetros inválidos' })
    return
  }

  const { id } = paramsResult.data

  const product = await getProduct(parseInt(id))
  if(!product) {
    res.json({ erro: 'Produto não encontrado' })
    return
  }

  const productWithAbsoluteImages = {
    ...product,
    images: product.images.map(img => getAbsoluteImageUrl(img))
  }

  //getting category
  const category = await getCategory(product.categoryId)

  // increment view count
  await incrementProductView(product.id)

  res.json({ 
    erro: null, 
    product: productWithAbsoluteImages,
    category
  })
}