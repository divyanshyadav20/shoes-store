import { Shoe } from "@/models";
import { create } from "zustand";

type CartItem = {
  shoe: Shoe;
  quantity: number;
};

type Store = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  toggleCart: (bool: boolean) => void;
  addToCart: (shoe: Shoe) => void;
  removeFromCart: (id: string) => void;
};

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

const useShoesStore = create<Store>()((set) => ({
  isCartOpen: false,
  cartItems: [],
  addToCart: (shoe) => set((state) => addToCart(state.cartItems, shoe)),
  removeFromCart: (id) => set((state) => removeFromCart(state.cartItems, id)),
  toggleCart: (bool) => set(() => ({ isCartOpen: bool })),
}));

export default useShoesStore;
