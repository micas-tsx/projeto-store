"use client"

import { useState } from 'react'
import Image from 'next/image'

type Props = {
  text: string
}

export const ProductDescription = ({ text }: Props) => {
  const [opened, setOpened] = useState(true)
  
  return(
    <div className="bg-white border border-gray-200 px-6 md:px-12 mt-20">
      <div className={`flex justify-between items-center py-7 ${opened ? 'border-b' : 'border-0 '} border-gray-200`}>
        <div className="text-2xl">Informações do Produto</div>
        <div 
          onClick={() => setOpened(!opened)}
          className={`cursor-pointer rounded-sm border border-gray-200 size-14 flex justify-center items-center`}
        >
          <Image 
            src={'/assets/ui/arrow-left-s-line.png'}
            alt="close section"
            width={24}
            height={24}
            className={`${opened ? 'rotate-0' : 'rotate-180'} transition-all`}
          />
        </div>
      </div>
      {opened &&
        <div className="text-gray-500 my-12">
          {text}
        </div>
      } 
    </div>
  )
}