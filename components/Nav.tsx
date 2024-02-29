"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Nav = ({ pages }: { pages: any[] }) => {
  console.log(pages);

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex">
        {pages.map((page) => {
          return (
            <NavigationMenuItem key={page.slug}>
              <Link href={`/${page.slug}`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {page.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
