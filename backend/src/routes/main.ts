import { Router } from 'express'

export const route = Router()

route.get('/ping', (req, res) => {
  res.json({ pong: true })
} )