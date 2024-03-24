import { inter } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          id="menuBtn"
          variant="link"
          className={cn(
            "items-center flex text-md font-light text-white/90 hover:text-zinc-900 hover:no-underline uppercase border border-white hover:bg-white rounded-none",
            inter.className
          )}
        >
          menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-4 h-full">
          <div className="grid grid-rows-4 p-6">
            <div className="flex flex-col gap-8 row-span-3 items-start justify-center h-full">
              <SheetClose asChild>
                <Button
                  id="closeMenuBtn"
                  variant="link"
                  className="text-5xl p-0 text-white"
                  asChild
                >
                  <Link href="/">Home</Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button
                  id="aboutBtn"
                  variant="link"
                  className="text-5xl p-0 text-white"
                >
                  <Link href="/about-us">About</Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
