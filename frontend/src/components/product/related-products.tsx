import { ProductList } from "../product-list"
import { data } from '@/data'

type Props = {
  id: number
}

export const RelatedProducts = ({ id }: Props) => {
  return(
    <div className="mt-10">
      <h3 className="text-2xl">Você também vai gostar</h3>

      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  )
}