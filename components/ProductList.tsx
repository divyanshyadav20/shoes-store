"use client";

import { Product } from "@/models";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: Product[];
  title?: string;
  showProductDetails?: boolean;
  animatedList?: boolean;
};

function ProductList({ products, title, showProductDetails = true }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {title && (
          <h3 className="mb-5 text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
        )}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  unoptimized
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              {showProductDetails && (
                <>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
