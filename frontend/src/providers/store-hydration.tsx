"use client"

import { useCartStore } from "@/store/cart"
import { getCartState } from '@/actions/get-cart-state'
import { useEffect } from 'react'

export const StoreHydration = () => {
  useEffect(() => {
    getCartState().then(({ cart }) => {
        if(cart.length > 0) {
          useCartStore.setState({ cart })
        }
    })
  }, [])

  return null
}