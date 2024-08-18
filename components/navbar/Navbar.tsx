import { HEADER_LINKS } from "@/lib/constants";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Toggle from "./Toggle";

export default function Navbar() {
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
            <ul className="hidden space-x-4 lg:flex">
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
              className="border-0 bg-transparent"
              variant="outline"
              size="icon"
            >
              <ShoppingCart size={20} className="text-gray-500" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
