import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Toggle from "./Toggle";

function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-md">
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

          {/* Cart */}
          <div className="ml-auto">
            <Button className="border-0" variant="outline" size="icon">
              <ShoppingCart size={20} className="text-gray-500" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
