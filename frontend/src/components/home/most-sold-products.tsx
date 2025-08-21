import { ProductList } from "../product-list"
import { getProducts } from "@/actions/get-products"

export const MostSoldProducts = async () => {
  const products = await getProducts({
      orderBy: 'selling',
      limit: 4
    })

  // Fallback para dados mockados se não houver produtos
  const fallbackProducts = [
    { id: 1, label: 'Camisa PHP', price: 49.90, image: '/assets/products/camiseta-php.png', liked: false },
    { id: 2, label: 'Camisa Laravel', price: 50.90, image: '/assets/products/camiseta-laravel-branca.png', liked: false },
    { id: 3, label: 'Camisa Node', price: 60.80, image: '/assets/products/camiseta-node.png', liked: false },
    { id: 4, label: 'Camisa React', price: 51.70, image: '/assets/products/camiseta-react-preta.png', liked: false },
  ]

  const displayProducts = products.length > 0 ? products : fallbackProducts

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">Produtos mais vendidos</h2>
      <p className="text-gray-500 text-center md:text-left">Campeões de vendas na nossa loja.</p>

      <div className="mt-9">
        <ProductList list={displayProducts} />
      </div>
    </div>
  )
}