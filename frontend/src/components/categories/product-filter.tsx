"use client"

import { useEffect, useState, useTransition, ChangeEvent } from 'react'
import { useQueryString } from '@/hooks/use-querystring'
import { FilterGroup } from './filter-group';
import { ProductItem } from '../product-item';
import { Category, CategoryMetadata } from '@/types/category'
import type { Product } from '@/types/product';
import { getProducts } from '@/actions/get-products';
import type { Order } from '@/types/order';
import { ProductGridSkeleton } from './product-grid-skeleton'

type Props = {
  category: Category
  metadata: CategoryMetadata[]
  filters: any
}

export const ProductFilterList = ({ category, metadata, filters }: Props) => {
  const [filterOpened, setFilterOpened] = useState(false);
  const queryString = useQueryString();
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const order: Order = queryString.get('order') as Order ?? 'views'

  const fetchProducts = async (filters: any) => {
    filters.order = undefined

    setLoading(true)
    setProducts(
      await getProducts({
        limit: 9,
        metadata: filters,
        orderBy: order
      })
    )
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts(filters)
  }, [filters])

  const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    queryString.set('order',e.target.value)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="text-3xl"> 
          {loading && 
            <div className="bg-gray-200 w-24 h-6 rounded animate-pulse"></div>
          }
          {!loading &&
          <>
            <strong>{products.length}</strong> Produto{products.length != 1 ? 's' : ''} 
          </>
          }
        </div>
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
          {loading &&
            <ProductGridSkeleton />
          }
          {!loading && 
            products.map(item => (
              <ProductItem key={item.id} data={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}