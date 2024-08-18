import ProductList from "@/components/ProductList";
import shoes from "@/data.json";

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return <ProductList shoes={shoes} />;
}
