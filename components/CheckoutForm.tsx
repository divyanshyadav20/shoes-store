"use client";

import { CheckoutFormSchema } from "@/lib/formSchema";
import useShoesStore from "@/lib/store";
import { cn } from "@/lib/utils";
import { Shoe } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border p-4 sm:p-6", className)}>
      {children}
    </div>
  );
}

function Item({
  shoe,
  quantity,
  removeItem,
}: {
  shoe: Shoe;
  quantity: number;
  removeItem: (id: string) => void;
}) {
  return (
    <div className="mt-6 border-b first:mt-0 last:border-none">
      <div className="flex py-4">
        <Image
          className="aspect-square h-24 w-24 max-w-full flex-shrink-0 rounded-sm object-cover object-center"
          src={shoe.image}
          alt={shoe.image}
          width={100}
          height={100}
        />

        <div className="ml-4 flex-1">
          <div className="sm:flex sm:items-start sm:justify-between">
            <div className="flex-1 text-sm font-medium leading-5">
              <h3>
                <Link
                  href={`/shop/${shoe.id}`}
                  className="transition-colors duration-300 hover:text-indigo-600"
                >
                  {shoe.name}
                </Link>
              </h3>

              <p className="mt-1">${shoe.price}</p>
              <p className="mt-1 text-gray-500">x{quantity}</p>
            </div>

            <div className="flex flex-none sm:ml-0.5 sm:mr-0">
              <p
                onClick={() => removeItem(shoe.id)}
                className="cursor-pointer text-sm font-medium leading-5 text-indigo-600"
              >
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderSummaryPrice({
  title,
  value,
  className,
}: {
  title: string;
  value: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <p className="text-base font-normal text-gray-500">{title}</p>
      <p className="text-base font-medium">${value}</p>
    </div>
  );
}

function CheckoutForm() {
  const { cartItems, removeFromCart } = useShoesStore();

  const form = useForm<z.infer<typeof CheckoutFormSchema>>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      shippingAddress: "",
      city: "",
      country: "",
      discountCode: "",
    },
  });

  if (!cartItems.length) {
    return (
      <div className="mt-8 flex min-h-96 flex-col items-center justify-center text-center">
        <ShoppingCart size={100} strokeWidth={1.5} className="text-gray-500" />
        <p className="my-4 text-lg text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  const totalCartValue = cartItems.reduce((acc, curr) => {
    return acc + curr.shoe.price * curr.quantity;
  }, 0);

  const tax = 10;
  const totalAfterTax = totalCartValue + tax;

  const onSubmit = (values: z.infer<typeof CheckoutFormSchema>) => {
    console.log({ values });
  };

  const confettiTime = () => {
    const end = Date.now() + 7 * 1000;
    const colors = ["#bb0000", "#fb6f92"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 lg:flex lg:items-start lg:gap-6"
      >
        {/* Billing Address Section */}
        <div className="w-full lg:max-w-96 xl:max-w-lg">
          <Box>
            <p className="text-xl font-semibold">Billing Address</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          autoFocus
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@doe.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="shippingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shipping Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter here your address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </Box>

          {/* Discount Code Section */}
          <Box className="mt-6 flex items-end gap-3">
            <FormField
              control={form.control}
              name="discountCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Discount Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="button" variant="custom">
              Apply
            </Button>
          </Box>
        </div>

        {/* Cart Items Section */}
        <div className="mt-6 w-full min-w-0 lg:mt-0">
          <Box className="max-h-96 overflow-auto">
            {cartItems.map((item) => (
              <Item
                removeItem={removeFromCart}
                key={item.shoe.id}
                shoe={item.shoe}
                quantity={item.quantity}
              />
            ))}
          </Box>

          {/* Order Summary Section */}
          <Box className="mt-6">
            <p className="text-xl font-semibold leading-7">Order Summary</p>

            <div className="mt-4">
              <OrderSummaryPrice
                title="Original Price"
                value={totalCartValue}
              />
              <OrderSummaryPrice className="mt-2" title="Savings" value={0} />
              <OrderSummaryPrice className="mt-2" title="Tax" value={tax} />
            </div>

            <div className="mt-4 flex justify-between gap-1 border-t pt-2 text-center">
              <p className="text-base font-bold">Total</p>
              <p className="text-base font-bold">${totalAfterTax}</p>
            </div>

            <Button
              className="mt-4 h-10 w-full px-6 py-3 text-sm"
              variant="custom"
              type="submit"
              onClick={() => confettiTime()}
            >
              Pay
            </Button>

            <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link
                  href="/shop"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Return to Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </Box>
        </div>
      </form>
    </Form>
  );
}

export default CheckoutForm;
