"use server"

import { setServerCart } from "@/libs/server-cookies"
import type { CartItem } from "@/types/cart-item"

export const setCartState = async (cart: CartItem[]) => {
  await setServerCart(cart) // seta o novo estado do carrinho nos cookies
}