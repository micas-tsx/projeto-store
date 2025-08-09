import { prisma } from "../libs/prisma"

type ProductFilters  = {
  metadata?: { [key: string]: string }
  order?: string
  limit?: number
}

export const getAllProduct = async (filters: ProductFilters) => {
  let orderBy = {}
  switch(filters.order) {
    case 'views': 
    default:
      orderBy = { viesCount: 'desc' }
      break;
    case 'selling':
      orderBy = { salesCount: 'desc' }
      break;
    case 'price': 
      orderBy = { price: 'asc' }
      break;
  }

  // organizar metadata

  let where = {}

  const products = await prisma.product.findMany({
    select: {
      id: true,
      label: true,
      price: true,
      images: {
        take: 1,
        orderBy: { id: 'asc' }
      }
    },
    where,
    orderBy,
    take: filters.limit ?? undefined
  })

  return products
}