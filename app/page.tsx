"use client";

import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Reveal from "@/components/Reveal";
import useFetchProducts from "@/hooks/useFetchProducts";
import { ProductCategory } from "@/models";
import { useEffect } from "react";

export default function Home() {
  const { products, fetchProducts } = useFetchProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log({ products });

  return (
    <div>
      <Hero />
      <Promo />
      <Reveal>
        <FeaturedProducts category={ProductCategory.Mobile} title="Mobiles" />
      </Reveal>
      <Reveal>
        <FeaturedProducts category={ProductCategory.TV} title="TV" />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
    </div>
  );
}
