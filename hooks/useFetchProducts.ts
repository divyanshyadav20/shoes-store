"use client";

import { Product, ProductCategory } from "@/models";
import axios from "axios";
import { useCallback, useState } from "react";

type Data = {
  status: string;
  products: Product[];
  message: string;
};

type Filters = {
  type?: ProductCategory;
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async (filters?: Filters) => {
    setIsLoading(true);
    let apiUrl = "https://fakestoreapi.in/api/products";

    if (filters?.type) {
      apiUrl += `/category`;
    }

    try {
      const { data }: { data: Data } = await axios.get(apiUrl, {
        params: filters,
      });

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { products, isLoading, fetchProducts };
};

export default useFetchProducts;
