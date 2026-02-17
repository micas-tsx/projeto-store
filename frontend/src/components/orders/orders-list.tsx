"use client"

import { cancelOrder } from '@/actions/cancel-order'
import { UserOrder } from '@/actions/get-user-orders'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  orders: UserOrder[]
  token: string
}

export const OrdersList = ({ orders, token }: Props) => {
  const router = useRouter()
  const [cancelingOrderId, setCancelingOrderId] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      case 'expired':
        return 'bg-gray-100 text-gray-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendente'
      case 'paid':
        return 'Pago'
      case 'cancelled':
        return 'Cancelado'
      case 'expired':
        return 'Expirado'
      case 'failed':
        return 'Falhou'
      default:
        return status
    }
  }

  const handleCancel = async (orderId: number) => {
    if (!confirm('Tem certeza que deseja cancelar este pedido?')) {
      return
    }

    setError(null)
    setCancelingOrderId(orderId)

    const result = await cancelOrder(token, orderId)
    
    setCancelingOrderId(null)

    if (result.success) {
      router.refresh()
    } else {
      setError(result.error || 'Erro ao cancelar pedido')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-sm p-8 text-center">
        <p className="text-gray-500">Você ainda não possui pedidos.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pedido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(order.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusLabel(order.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  R$ {order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {order.status === 'pending' && (
                    <button
                      onClick={() => handleCancel(order.id)}
                      disabled={cancelingOrderId === order.id}
                      className="text-red-600 hover:text-red-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {cancelingOrderId === order.id ? 'Cancelando...' : 'Cancelar Pedido'}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-sm p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-sm font-medium text-gray-500">Pedido</div>
                <div className="text-lg font-bold text-gray-900">#{order.id}</div>
              </div>
              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                {getStatusLabel(order.status)}
              </span>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Data:</span>
                <span className="text-gray-900">{formatDate(order.createdAt)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total:</span>
                <span className="font-semibold text-gray-900">R$ {order.total.toFixed(2)}</span>
              </div>
            </div>

            {order.status === 'pending' && (
              <button
                onClick={() => handleCancel(order.id)}
                disabled={cancelingOrderId === order.id}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cancelingOrderId === order.id ? 'Cancelando...' : 'Cancelar Pedido'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
