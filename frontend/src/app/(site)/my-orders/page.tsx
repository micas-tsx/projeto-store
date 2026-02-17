import { getAuthState } from "@/actions/get-auth-state"
import { getUserOrders } from "@/actions/get-user-orders"
import { OrdersList } from "@/components/orders/orders-list"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function Page() {
  const { token } = await getAuthState()

  if (!token) {
    redirect('/login')
  }

  const orders = await getUserOrders(token)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Image
          src={'/assets/ui/shopping-bag-4-line-black.png'}
          alt="orders"
          width={24}
          height={24}
        />
        <h1 className="text-2xl font-bold">Meus Pedidos</h1>
      </div>

      <OrdersList orders={orders} token={token} />
    </div>
  )
}