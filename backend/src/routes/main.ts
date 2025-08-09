import { Router } from 'express'
import * as bannerController from '../controllers/banner'

export const route = Router()

route.get('/ping', (req, res) => {
  res.json({ pong: true })
} )

route.get('/banners', bannerController.getBanner )