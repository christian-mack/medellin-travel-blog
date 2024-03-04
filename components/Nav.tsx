"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
          <SheetDescription>
            {pages.map((page) => {
              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  legacyBehavior
                  passHref
                >
                  {page.title}
                </Link>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
