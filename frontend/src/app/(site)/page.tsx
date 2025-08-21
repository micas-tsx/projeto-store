import { Banners } from "@/components/home/banners"
import { MostViewedProducts } from "@/components/home/most-viewed-products"
import { MostSoldProducts } from "@/components/home/most-sold-products"
import { ProductListSkeleton } from "@/components/home/product-list-skeleton"
import Image from "next/image"
import { Suspense } from 'react'
import { getBanners } from "@/actions/get-banners";

export default async function Page() {
  const banners = await getBanners()
  
  return(
    <div>
      <Banners list={banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 mds:mt-12">
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src="/assets/ui/truck-line.png"
              alt="Ícone de caminhão"
              width={40}
              height={40}
              unoptimized
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Frete Grátis</div>
            <div className="text-gray-500">Para todo Centro-Oeste</div>
          </div>
        </div>
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src="/assets/ui/discount-percent-line.png"
              alt="Ícone de caminhão"
              width={40}
              height={40}
              unoptimized
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Muitas Ofertas</div>
            <div className="text-gray-500">Orfertas imbatíveis</div>
          </div>
        </div>
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src="/assets/ui/arrow-left-right-line.png"
              alt="Ícone de caminhão"
              width={40}
              height={40}
              unoptimized
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Troca fácil</div>
            <div className="text-gray-500">No período de 30 dias</div>
          </div>
        </div>
      </div>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProducts />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProducts />
      </Suspense>
    </div>
  )
}