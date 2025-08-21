"use client"

import { useState, type ChangeEvent } from 'react'
import { useQueryString } from '@/hooks/use-querystring'
import { FilterGroup } from './filter-group';
import { data } from '@/data';
import { ProductItem } from '../product-item';
import { Category, CategoryMetadata } from '@/types/category'


type Props = {
  category: Category
  metadata: CategoryMetadata[]
}

export const ProductFilterList = ({ category, metadata }: Props) => {
  const [filterOpened, setFilterOpened] = useState(false);
  const queryString = useQueryString();

  const order = queryString.get('order') ?? 'views'

  const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    queryString.set('order',e.target.value)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="text-3xl"> <strong>{data.products.length}</strong> Produto{data.products.length != 1 ? 's' : ''} </div>
        <div className="flex w-full flex-row md:max-w-70 gap-5">
          <select 
            defaultValue={order} 
            onChange={handleSelectChanged}
            className="flex-1 px-6 h-14 flex items-center bg-white border border-gray-200 rounded-sm text-gray-500"
          >
            <option value="views">Popularidade</option>
            <option value="price">Por preço</option>
            <option value="selling">Mais vendido</option>
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
          
          {metadata.map(item => (
            <FilterGroup
              key={item.id}
              id={item.id}
              name={item.name}
              values={item.value}
            />
          ))}
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.products.map(item => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}