import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import ProductList from "@/components/ProductList";
import Promo from "@/components/Promo";
import shoes from "@/data.json";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Promo />
      <ProductList shoes={shoes.splice(0, 4)} title="Frequently Bought" />
      <Features />
      <Footer />
    </div>
  );
}
