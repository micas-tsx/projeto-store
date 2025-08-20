import { getShippingInfo } from "@/actions/get-shipping-info"
import { useCartStore } from "@/store/cart"

export const ShippingBoxNotLogged = () => {
  const cartStore = useCartStore(state => state)
  
  const handleUpdateShipipng = async () => {
    if(cartStore.shippingZipcode.length > 4) {
      const shippingInfo = await getShippingInfo(cartStore.shippingZipcode)
      if(shippingInfo) [
        cartStore.setShippingCost(shippingInfo.cost),
        cartStore.setShippingDays(shippingInfo.days)
      ]
    }
  }

  return(
    <div className="flex gap-4">
      <input 
        type="text" 
        value={cartStore.shippingZipcode}
        onChange={e => cartStore.setShippingZipcode(e.target.value)}
        placeholder="Digete seu CEP"
        className="flex-1 border border-gray-200 px-6 py-5 bg-white rounded-sm"
      />
      <button
        className="cursor-pointer px-6 py-5 bg-blue-600 text-white border-0 rounded-sm"
        onClick={handleUpdateShipipng}
      >
        Calcular
      </button>
    </div>
  )
}