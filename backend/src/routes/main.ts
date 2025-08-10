import { Router } from 'express'
import * as bannerController from '../controllers/banner'
import * as productController from '../controllers/product'
import * as categoryController from '../controllers/category'
import * as cartController from '../controllers/cart'
import * as userController from '../controllers/user'
import { authMiddleware } from '../middleware/auth'

export const route = Router()

route.get('/ping', (req, res) => {
  res.json({ pong: true })
} )

route.get('/banners', bannerController.getBanner )

route.get('/products', productController.getProducts )
route.get('/product/:id', productController.getOneProduct )
route.get('/product/:id/related', productController.getRelatedProducts )

route.get('/category/:slug/metadata', categoryController.getCategoryWithMetadata)

route.post('/cart/mount', cartController.cartMount)
route.get('/cart/shipping', cartController.calculateShipping)

route.post('/user/register', userController.register)
route.post('/user/login', userController.login)
route.post('/user/addresses', authMiddleware, userController.addAddress)
route.get('/user/addresses', authMiddleware, userController.getAddresses)