"use client"

import Image from "next/image"
import { HeaderIcon } from './header-icon';
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRÁTIS</strong> para todo o Centro-Oest nas compras acima de R$ 199,00. <strong>APROVEITA!</strong>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <Image
              src="/assets/ui/logo-black.png"
              alt="b7logo"
              width={120}
              height={40}
            />
          </div>
          <div className="flex gap-4">
            <Link href={'/my-orders'}>
              <HeaderIcon src="/assets/ui/user-line.png" alt="perfil" />
            </Link>
            <Link href={'/cart'}>
              <HeaderIcon src="/assets/ui/shopping-bag-4-line.png" alt="carrinho" />
            </Link>
            <div className="md:hidden">
              <HeaderIcon src="/assets/ui/menu-line.png" alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}