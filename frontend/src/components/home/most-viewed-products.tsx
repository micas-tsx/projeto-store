import { data } from "@/data"
import { ProductList } from "../product-list"

export const MostViewedProducts = async () => {
  // TODO: fazer a req dos produtos

  return (
    <div className="mt-10">
      <h2 className="text-2xl">Produtos mais vistos</h2>
      <p className="text-gray-500">Campeões de visualização na nossa loja.</p>


      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  )
}