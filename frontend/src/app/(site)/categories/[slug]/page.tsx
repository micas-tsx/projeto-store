import { ProductFilterList } from '@/components/categories/product-filter'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params
  const filters = await searchParams
  
  // TODO: pegar as informações da catregoria

  return (
    <div className="">
      <div className="text-gray-500 mb-4">
        <Link href={'/'}>Home</Link> &gt; Temporário
      </div>

      <ProductFilterList />
    </div>
  )
}