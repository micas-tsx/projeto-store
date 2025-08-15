"use client"

import { useState } from 'react'

export const ProductFilterList = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="text-3xl"> <strong>99</strong> Produtos </div>
        <div className="flex w-full flex-row md:max-w-70 gap-5">
          <select className="flex-1 px-6 h-14 flex items-center bg-white border border-gray-200 rounded-sm text-gray-500">
            <option value="">Ordernar por</option>
          </select>
          <div 
            onClick={() => setFilterOpened(!filterOpened)}
            className="flex-1 px-6 h-14 flex md:hidden items-center bg-white border border-gray-200 rounded-sm text-gray-500"
          >
            Filtrar por
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className={`flex-1 md:max-w-70 ${filterOpened ? 'block' : 'hidden'} md:block`}>
          Filtro 
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </div>
      </div>
    </div>
  )
}