import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Reveal from "@/components/Reveal";
import { ProductCategory } from "@/models";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promo />
      <Reveal>
        <FeaturedProducts category={ProductCategory.Mobile} title="Mobiles" />
      </Reveal>
      <Reveal>
        <FeaturedProducts category={ProductCategory.TV} title="TV" />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
    </div>
  );
}
