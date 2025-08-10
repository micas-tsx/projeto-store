import { Router } from 'express'
import * as bannerController from '../controllers/banner'
import * as productController from '../controllers/product'
import * as categoryController from '../controllers/category'

export const route = Router()

route.get('/ping', (req, res) => {
  res.json({ pong: true })
} )

route.get('/banners', bannerController.getBanner )

route.get('/products', productController.getProducts )
route.get('/product/:id', productController.getOneProduct )
route.get('/product/:id/related', productController.getRelatedProducts )

route.get('/category/:slug/metadata', categoryController.getCategoryWithMetadata)