"use client";

import Image from "next/image";
import { HeaderIcon } from "./header-icon";
import Link from "next/link";
import { useState } from "react";
import { HeaderSearch } from "./header-search";
import { MenuItem } from '@/types/menu-item'

export default function Header() {
  const menu: MenuItem[] = [
    { label: "Camisas", href: "/categories/camisas" },
    { label: "Kits", href: "/categories/kit" },
  ];

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRÁTIS</strong> para todo o Centro-Oeste nas compras acima
        de R$ 199,00. <strong>APROVEITA!</strong>
      </div>

      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <Link href="/">
              <Image
                src="/assets/ui/logo-black.png"
                alt="b7logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <div className="flex-1">
            <div className="w-full hidden md:flex items-center px-6 gap-6">
              <div className="flex-1">
                <ul className="flex gap-10 font-medium text-gray-500">
                  {menu.map((item) => (
                    <li key={item.label}>
                    <Link key={item.label} href={item.href}>
                      {item.label}
                    </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/my-orders">
              <HeaderIcon src="/assets/ui/user-line.png" alt="perfil" />
            </Link>
            <Link href="/cart">
              <HeaderIcon
                src="/assets/ui/shopping-bag-4-line.png"
                alt="carrinho"
              />
            </Link>
            <div
              className="md:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <HeaderIcon
                src="/assets/ui/menu-line.png"
                alt="menu"
                selected={menuOpened}
                srcSelected="/assets/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>

        {menuOpened && (
          <div className="md:hidden">
            {menu.map((item) => (
              <Link key={item.label} href={item.href}>
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <div className="font-medium text-lg text-gray-500">
                    {item.label}
                  </div>
                  <Image
                    src="/assets/ui/arrow-up-right.png"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="p-6 md:hidden">
          <HeaderSearch />
        </div>
      </div>
    </header>
  );
}
