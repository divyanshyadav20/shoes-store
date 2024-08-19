"use client";

import useShoesStore from "@/lib/store";
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "./ui/sheet";

function Cart() {
  const { isCartOpen, toggleCart, cartItems, removeFromCart } = useShoesStore();

  const totalCartValue = cartItems.reduce((acc, curr) => {
    return acc + curr.shoe.price * curr.quantity;
  }, 0);

  function renderSheetContent() {
    if (!cartItems.length) {
      return (
        <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-4">
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingCart
              size={100}
              strokeWidth={1.5}
              className="text-gray-500"
            />
            <p className="my-4 text-lg text-gray-600">Your cart is empty</p>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="h-[calc(100vh-280px)] overflow-y-auto px-3">
          <ul role="cart-list" className="divide-y divide-gray-200">
            {cartItems.map(({ shoe, quantity }) => (
              <li key={shoe.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    width={300}
                    height={300}
                    src={shoe.image}
                    alt={shoe.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link
                          onClick={() => toggleCart(false)}
                          href={`/shop/${shoe.id}`}
                        >
                          {shoe.name}
                        </Link>
                      </h3>
                      <p className="ml-4">${shoe.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeFromCart(shoe.id)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 mt-3 w-full">
          <div className="border-t border-gray-200 px-3 py-6 sm:px-5">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalCartValue}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Button
                className="h-12 w-full px-6 py-3 text-base font-medium"
                variant="custom"
                asChild
              >
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link
                  href="/shop"
                  onClick={() => toggleCart(false)}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Sheet open={isCartOpen}>
        <SheetContent
          className="h-full p-0"
          onInteractOutside={() => toggleCart(false)}
        >
          <SheetTitle className="hidden" />
          <div className="sticky top-0 flex flex-row items-start justify-between space-y-0 border-b bg-white p-3">
            <h4 className="text-lg font-medium text-gray-900">Shopping cart</h4>
            <div className="flex h-7 items-center">
              <SheetClose asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleCart(false)}
                  className="h-8 border-none px-1 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close panel</span>
                  <X aria-hidden="true" className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
          </div>

          {renderSheetContent()}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Cart;
