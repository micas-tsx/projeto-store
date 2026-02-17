"use server"

import { api } from '@/libs/axios'

export const cancelOrder = async (token: string, orderId: number) => {
  try {
    const response = await api.put(`/orders/${orderId}/cancel`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.data.message) {
      return { success: true, message: response.data.message }
    }
  } catch (error: any) {
    const errorMessage = error?.response?.data?.erro || 'Erro ao cancelar pedido'
    return { success: false, error: errorMessage }
  }

  return { success: false, error: 'Erro ao cancelar pedido' }
}
