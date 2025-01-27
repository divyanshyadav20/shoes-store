"use client";

import useFetchProducts from "@/hooks/useFetchProducts";
import { ProductCategory } from "@/models";
import { useEffect } from "react";
import ProductList from "./ProductList";

type Props = {
  title: string;
  category: ProductCategory;
};

const FeaturedProducts = ({ title, category }: Props) => {
  const { products, fetchProducts } = useFetchProducts();

  useEffect(() => {
    fetchProducts({ type: category });
  }, [fetchProducts, category]);

  return (
    <ProductList
      showProductDetails={false}
      products={products.slice(0, 4)}
      title={title}
    />
  );
};

export default FeaturedProducts;
