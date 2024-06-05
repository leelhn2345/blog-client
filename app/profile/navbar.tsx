"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  items: {
    title: string;
    href: string;
  }[];
};
export function NavBar({ items }: Props) {
  const pathname = usePathname();
  return (
    <NavigationMenu orientation="horizontal" className="mb-2">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: [
                    [
                      [
                        `!text-sm, hover:bg-transparent hover:underline focus:bg-transparent
                        focus:underline data-[active]:bg-muted`,
                      ],
                    ],
                  ],
                })}
                active={pathname == item.href}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
