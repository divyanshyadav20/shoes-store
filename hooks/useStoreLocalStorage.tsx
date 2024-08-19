"use client";

import { CartItem, Order } from "@/models";

type StoreLocalStorage = {
  orders: Order[];
  cartItems: CartItem[];
  isCartOpen: boolean;
  discountCode: string | null;
};

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("shoes-store-storage");
  }

  return null;
};

export const useStoreLocalStorage = (): StoreLocalStorage => {
  const storeDataInLocalStorage = getLocalStorage();

  if (!storeDataInLocalStorage) {
    return {
      orders: [],
      cartItems: [],
      isCartOpen: false,
      discountCode: null,
    };
  }

  const storeData = JSON.parse(storeDataInLocalStorage);
  const { orders, cartItems, isCartOpen, discountCode } = storeData.state;

  return {
    orders: orders.length ? orders : [],
    cartItems: cartItems?.length ? cartItems : [],
    isCartOpen: isCartOpen || false,
    discountCode: discountCode || null,
  };
};
