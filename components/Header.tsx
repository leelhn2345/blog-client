"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Sidebar } from "./Sidebar";
import navigationData from "../data/navigation.json";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur
        supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container h-10">
        <Sidebar />
        <NavigationMenu className="hidden sm:flex">
          <Leaf className="mr-4 text-teal-600" />
          <NavigationMenuList>
            {navigationData.map((data) => (
              <NavigationMenuItem key={data.name}>
                <Link href={data.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {data.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
