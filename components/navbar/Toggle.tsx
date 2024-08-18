import { Menu } from "lucide-react";
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
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
}

export default Toggle;
