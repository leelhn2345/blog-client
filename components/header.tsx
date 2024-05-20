"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Leaf, MoonStar, Sun } from "lucide-react";
import { Sidebar } from "./sidebar";
import navigationData from "../data/navigation.json";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Header() {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90
        backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 justify-between">
        <div className="my-auto md:hidden">
          <Sidebar />
        </div>
        <NavigationMenu className="hidden md:flex">
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
        <div className="flex items-center gap-x-2">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90
                    dark:scale-0"
                />
                <MoonStar
                  className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0
                    dark:scale-100"
                />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <Link href="/auth">Login / Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
