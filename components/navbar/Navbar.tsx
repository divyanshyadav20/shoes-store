"use client";

import { HEADER_LINKS } from "@/lib/constants";
import useShoesStore from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Toggle from "./Toggle";

export default function Navbar() {
  const { toggleCart, cartItems } = useShoesStore();

  const totalCount = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <header className="sticky top-0 z-40 bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-2">
        <div className="flex h-12 items-center">
          {/* Mobile Toggle */}
          <Toggle />

          {/* Logo */}
          <div className="ml-4 lg:ml-0">
            <Link href="/">
              <Image
                priority
                width={45}
                height={45}
                unoptimized
                src="/brand-logo.png"
                alt="Brand Logo"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="ml-7">
            <ul className="hidden space-x-6 lg:flex">
              {HEADER_LINKS.map(({ name, href }, index) => (
                <li key={index}>
                  <Link
                    className="transition-colors duration-300 hover:text-indigo-600"
                    href={href}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart */}
          <div className="ml-auto">
            <Button
              className="relative border-0 bg-transparent"
              variant="outline"
              size="icon"
              onClick={() => toggleCart(true)}
            >
              <ShoppingCart size={20} className="text-gray-500" />
              {totalCount > 0 && (
                <span className="absolute inset-0 -mr-6 object-right-top">
                  <div className="inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1 py-0 text-xs font-semibold leading-4 text-white">
                    {totalCount}
                  </div>
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
