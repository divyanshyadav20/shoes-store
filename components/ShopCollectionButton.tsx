import Link from "next/link";
import { Button } from "./ui/button";

function ShopCollectionButton() {
  return (
    <Button variant="custom" asChild>
      <Link href="/shop">Shop Collection</Link>
    </Button>
  );
}

export default ShopCollectionButton;
