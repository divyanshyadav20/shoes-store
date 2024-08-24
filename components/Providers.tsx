import React from "react";
import { Toaster } from "sonner";
import Cart from "./Cart";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <main vaul-drawer-wrapper="" className="min-h-[100vh] bg-white">
      <Navbar />
      {children}
      <Cart />
      <Footer />
      <Toaster richColors />
    </main>
  );
}

export default Providers;
