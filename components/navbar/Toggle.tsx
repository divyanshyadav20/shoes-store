import { FOOTER_LINKS } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
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
          <DrawerContent className="flex flex-col gap-5 p-5">
            {/* Need to keep it here like this otherwise there is an error in the console for missing drawer title */}
            <DrawerHeader className="hidden">
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>

            {FOOTER_LINKS.map(({ name, href }, index) => (
              <DrawerClose key={index} asChild>
                <Link
                  className="text-xl transition-colors duration-300 hover:text-indigo-600"
                  href={href}
                >
                  {name}
                </Link>
              </DrawerClose>
            ))}
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
}

export default Toggle;
