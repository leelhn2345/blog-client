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
import navigationData from "../../data/navigation.json";

export function NavBar() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <Leaf className="mr-4 text-teal-600" />
      <NavigationMenuList>
        {navigationData.map((data) => (
          <NavigationMenuItem key={data.name}>
            <Link href={data.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: [
                    [
                      `bg-transparent !text-base font-semibold hover:bg-transparent hover:text-teal-600
                      focus:bg-transparent focus:text-teal-600 data-[active]:bg-transparent
                      data-[active]:text-teal-600`,
                    ],
                  ],
                })}
                active={pathname === data.href}
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
