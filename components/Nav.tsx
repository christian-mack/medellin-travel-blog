"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const Nav = ({ pages }: { pages: any[] }) => {
  return (
    <Sheet>
      <SheetTrigger dir="">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription className="flex flex-col mt-10">
            {pages.map((page) => {
              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  legacyBehavior
                  passHref
                >
                  <span className="text-6xl">{page.title}</span>
                </Link>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
