import { CartItem, Shoe, Store } from "@/models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

function addToCart(cartItems: CartItem[], shoe: Shoe) {
  const itemAlreadyInCart = cartItems.find((item) => item.shoe.id === shoe.id);

  if (itemAlreadyInCart) {
    const updatedItem = {
      ...itemAlreadyInCart,
      quantity: itemAlreadyInCart.quantity + 1,
    };

    const updatedItems = cartItems.map((item) => {
      if (item.shoe.id === shoe.id) {
        return updatedItem;
      }
      return item;
    });

    return {
      cartItems: updatedItems,
    };
  }

  return {
    cartItems: [
      ...cartItems,
      {
        shoe,
        quantity: 1,
      },
    ],
  };
}

function removeFromCart(cartItems: CartItem[], id: string) {
  console.log(cartItems);
  const hasMoreThanOne = cartItems.find(
    (item) => item.shoe.id === id,
  )?.quantity;

  if (hasMoreThanOne && hasMoreThanOne > 1) {
    return {
      cartItems: cartItems.map((item) => {
        if (item.shoe.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    };
  }

  return {
    cartItems: cartItems.filter((item) => item.shoe.id !== id),
  };
}

function setCartItems(shoes: Shoe[]): CartItem[] {
  return shoes.map((shoe) => ({
    shoe,
    quantity: 1,
  }));
}

const useShoesStore = create<Store>()(
  persist(
    (set) => ({
      orders: [],
      cartItems: [],
      isCartOpen: false,
      discountCode: null,
      setDiscountCode: (code) => set(() => ({ discountCode: code })),
      addToCart: (shoe) => set((state) => addToCart(state.cartItems, shoe)),
      removeFromCart: (id) =>
        set((state) => removeFromCart(state.cartItems, id)),
      toggleCart: (bool) => set(() => ({ isCartOpen: bool })),
      setCartItems: (shoes) => set(() => ({ cartItems: setCartItems(shoes) })),
      addOrder: (order) =>
        set((state) => ({ orders: [...state.orders, order] })),
      clearCart: () => set(() => ({ cartItems: [] })),
    }),
    { name: "shoes-store-storage" },
  ),
);

export default useShoesStore;
