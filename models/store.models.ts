import { Shoe } from "./shoes.models";

export type CartItem = {
  shoe: Shoe;
  quantity: number;
};

export type Order = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  shippingAddress: string;
  city: string;
  items: CartItem[];
  totalAmount: number;
  discountCode?: string;
  discountAmount: number;
};

export type Store = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  orders: Order[];
  discountCode: string | null;
  setDiscountCode: (code: string | null) => void;
  toggleCart: (bool: boolean) => void;
  addToCart: (shoe: Shoe) => void;
  removeFromCart: (id: string) => void;
  setCartItems: (shoes: Shoe[]) => void;
  addOrder: (order: Order) => void;
  clearCart: () => void;
};
