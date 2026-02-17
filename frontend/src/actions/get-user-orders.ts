"use server"

import { api } from '@/libs/axios'

export type UserOrder = {
  id: number
  status: 'pending' | 'paid' | 'cancelled' | 'expired' | 'failed'
  total: number
  createdAt: string
}

export const getUserOrders = async (token: string) => {
  try {
    const response = await api.get('/orders', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.data.orders) {
      return response.data.orders as UserOrder[]
    }
  } catch (error) {
    console.error('Error fetching orders:', error)
  }

  return []
}
