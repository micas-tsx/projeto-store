import cors from 'cors'
import express, { type Response, type Request, type NextFunction } from 'express'
import { route } from './routes/main.js'

const server = express()

server.use(cors())
server.use(express.static('public'))

server.use('/webhook/stripe', express.raw({ type: 'application/json' }))

server.use(express.json())
server.use(route)

server.use((err:any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json({ erro: 'ocorreu algum erro' })
})

const port  = process.env.PORT || 4000
server.listen(port, () => {
  console.log(`backend rodando em: ${port}`)
}) 