import type { RequestHandler } from "express";
import { getCategoryBySlug, getCategoryMetadata } from "../services/category";

export const getCategoryWithMetadata: RequestHandler = async (req, res) => {
  const { slug } = req.params

  const category  = await getCategoryBySlug(slug)
  if(!category) {
    res.json({ erro: 'categoria não encontrada' })
    return
  }

  const metadata = await getCategoryMetadata(category.id)

  res.json({ erro: null, category, metadata })
}