import Image from "next/image"
import { useCartStore } from '@/store/cart'

type Props = {
  src: string
  alt: string
  selected?: boolean
  srcSelected?: string
  isCart: boolean
}

export const HeaderIcon = ({ src, alt, selected, srcSelected, isCart }: Props) => {
  const cartStore = useCartStore(state => state)
  
  return (    
      <div className={`size-12 relative border-gray-200 border rounded-sm flex justify-center items-center ${selected ? 'bg-blue-600' : 'hover:bg-gray-100'} `}>
        <div className={`w-4 h-4 right-0.5 top-0.5 flex items-center justify-center rounded-full border border-gray-300 ${!isCart ? 'hidden' : 'absolute'}`}><span>{cartStore.cart.length}</span></div>
        {!selected &&
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className="m-2 size-6"
        />
        }
        {selected && srcSelected &&
         <Image
         src={srcSelected}
         alt={alt}
         width={24}
         height={24}
         className="size-6"
       />
        }
      </div>
  )
}