"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationData from "../data/navigation.json";

export function NavBar() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <Leaf className="mr-4 text-teal-600" />
      <NavigationMenuList>
        {navigationData.map((data) => (
          <NavigationMenuItem key={data.name}>
            <Link href={data.url} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={pathname === data.url}
              >
                {data.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
