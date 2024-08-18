import { FOOTER_LINKS } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

function Toggle() {
  return (
    <div className="lg:hidden">
      <Drawer shouldScaleBackground>
        <DrawerTrigger asChild>
          <Button className="border-0" variant="outline" size="icon">
            <Menu size={20} strokeWidth={1.5} />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/40" />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-5 p-5">
              {FOOTER_LINKS.map(({ name, href }, index) => (
                <Link
                  className="text-xl transition-colors duration-300 hover:text-indigo-600"
                  href={href}
                  key={index}
                >
                  {name}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
}

export default Toggle;
