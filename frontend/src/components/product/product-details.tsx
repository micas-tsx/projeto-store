"use client"

import { ProductComplete } from '@/types/product'
import Image from 'next/image'

type Props= {
  product: ProductComplete
}

export const ProductDetails = ({ product }: Props) => {

  const addToCart = async () => {
    //  TODO: criação do carrinho
  }

  return(
    <div className="flex-1">
      <div className="text-xs text-gray-500 mb-2">Cod {product.id}</div>
      <div className="font-bold text-3xl mb-6">{product.label}</div>
      <div className="text-blue-600 font-bold text-4xl mb-2">R$ {product.price.toFixed(2)}</div>
      <div className="text-sm text-gray-500 mb-6">Até 12x no cartão</div>
      <div className="flex gap-4">
        <button 
          className="flex-1 max-w-xs py-4 px-8 bg-blue-600 hover:opacity-90 text-white border-0 rounded-sm cursor-pointer"
        >
          Adicionar ao carrinho
        </button>

        <div className="size-14 cursor-pointer border border-gray-200 rounded-sm flex justify-center items-center">
          <Image
            src={'/assets/ui/heart-3-line.png'}
            alt="heart"
            width={24}
            height={24}
          />
        </div>
        <div className="size-14 cursor-pointer border border-gray-200 rounded-sm flex justify-center items-center">
          <Image
            src={'/assets/ui/share-line.png'}
            alt="share"
            width={24}
            height={24}
          />
        </div>

      </div>
    </div>
  )  
}