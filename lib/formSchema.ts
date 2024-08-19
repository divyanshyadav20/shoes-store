"use client";

import { z } from "zod";

export const CheckoutFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  shippingAddress: z.string().min(1, "Shipping Address is required").max(300),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  discountCode: z.string().optional(),
});
