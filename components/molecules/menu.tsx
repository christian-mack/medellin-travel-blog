import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          className="items-center flex text-xl text-white/90 hover:text-red-500"
        >
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-4 h-full">
          <div className="grid grid-rows-4 p-6">
            <div className="flex flex-col gap-8 row-span-3 items-start justify-center h-full">
              <SheetClose asChild>
                <Button
                  variant="link"
                  className="text-5xl p-0 text-white"
                  asChild
                >
                  <Link href="/">Home</Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="link" className="text-5xl p-0 text-white">
                  <Link href="/about-us">About</Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="link" className="text-5xl p-0 text-white">
                  <Link href="/blog">Blog</Link>
                </Button>
              </SheetClose>
            </div>
            {/* <div className="flex items-end gap-6">
              <SheetClose asChild>
                <Button variant="link" className="text-2xl p-0 text-white">
                  Save changes
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="link" className="text-2xl p-0 text-white">
                  Save changes
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="link" className="text-2xl p-0 text-white">
                  Save changes
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="link" className="text-2xl p-0 text-white">
                  Save changes
                </Button>
              </SheetClose>
            </div> */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
