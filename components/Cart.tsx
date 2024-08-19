"use client";

import useShoesStore from "@/lib/store";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent } from "./ui/sheet";

function Cart() {
  const { isCartOpen, toggleCart, cartItems, removeFromCart } = useShoesStore();

  const totalCartValue = cartItems.reduce((acc, curr) => {
    return acc + curr.shoe.price * curr.quantity;
  }, 0);

  return (
    <Sheet open={isCartOpen}>
      <SheetContent
        className="overflow-y-auto p-0"
        onInteractOutside={() => toggleCart(false)}
      >
        <div className="sticky top-0 flex flex-row items-start justify-between space-y-0 bg-white p-3">
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

        <div className="mt-4 px-3">
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

        <div className="mt-3">
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
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
