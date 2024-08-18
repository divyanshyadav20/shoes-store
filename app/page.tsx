import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Promo from "@/components/Promo";
import Reveal from "@/components/Reveal";
import shoes from "@/data.json";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promo />
      <Reveal>
        <ProductList
          showProductDetails={false}
          shoes={shoes.slice(0, 4)}
          title="Frequently Bought"
        />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
    </div>
  );
}
