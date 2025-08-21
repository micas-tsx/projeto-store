"use client"

import { useCartStore } from "@/store/cart"
import { useAuthStore } from '@/store/auth'
import { getCartState } from '@/actions/get-cart-state'
import { getAuthState } from '@/actions/get-auth-state'
import { useEffect } from 'react'

export const StoreHydration = () => {
  const authStore = useAuthStore(state => state)
  
  // Hydrate auth state
  useEffect(() => {
    getAuthState().then(({ token } ) => {
      if(token) authStore.setToken(token)  
      authStore.setHydrated(true)
    })


    // hydrate cart state
    getCartState().then(({ cart }) => {
        if(cart.length > 0) {
          useCartStore.setState({ cart })
        }
    })
  }, [])

  return null
}