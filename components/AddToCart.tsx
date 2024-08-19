"use client";

import useShoesStore from "@/lib/store";
import { Shoe } from "@/models";
import { Button } from "./ui/button";

// Have to keep this as a separate component to use it on the client side
// inside the static pages
export default function AddToCart({ shoe }: { shoe: Shoe }) {
  const { addToCart, toggleCart } = useShoesStore();

  function handleCartAddition(shoe: Shoe) {
    toggleCart(true);
    addToCart(shoe);
  }

  return (
    <Button variant="custom" onClick={() => handleCartAddition(shoe)}>
      <svg
        className="-ms-2 me-2 h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        />
      </svg>
      Add to cart
    </Button>
  );
}
