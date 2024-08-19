import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shoes Store",
    default: "Shoes Store",
  },
  description: "An online store for shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Cart />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
