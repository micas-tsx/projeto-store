import type { RequestHandler } from "express";
import { registerSchema } from "../schema/register-schema";
import { createUser, logUser } from "../services/user";
import { loginSchema } from "../schema/login-schema";

export const register: RequestHandler = async (req,res) => {
  const result = registerSchema.safeParse(req.body)

  if(!result.success) {
    res.status(400).json({ erro: 'dados inválidos' })
    return
  }
  const { name, email, password } = result.data

  const user = await createUser(name, email, password)
  if(!user) {
    res.status(400).json({ erro: 'email ja cadastrado' })
    return
  }

  res.status(201).json({ erro: null, user })
}

export const login: RequestHandler = async (req, res) => {
  const result = loginSchema.safeParse(req.body) 
  if(!result.success) {
    res.status(400).json({ erro: 'dados inválidos' })
    return
  }
  const { email, password } = result.data

  const token = await logUser(email, password)
  if(!token) {
    res.status(401).json({ erro: "acesso negado" })
    return
  }

  res.json({ erro: null, token })
}