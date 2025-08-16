import { CartItem } from "@/types/cart-item"
import { cookies } from 'next/headers'

export const getServerCart = async (): Promise<CartItem[]> => {
  const cookieStore = await cookies() // pega os cookies
  const value = cookieStore.get('cart')?.value //passa se tem valores nos cookies
  if(!value) return [] // verifica se tem não tem valor e passa o array vazio

  try { //tenta {
    return JSON.parse(value) // retornar o valor como json
  } catch {
    return [] // sen n retornar um array vazio
  }
}

export const setServerCart = async (cart: CartItem[]) => {
  const cookieStore = await cookies() // pega os cookies

  cookieStore.set('cart', JSON.stringify(cart), { httpOnly: true }) // seta um novo item nos cookies
}

export const clearServerCart = async () => {
  const cookieStore = await cookies() // pega os cookies
  cookieStore.delete('cart') // limpa os cookies
}