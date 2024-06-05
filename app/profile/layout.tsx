"use client";

import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { NavBar } from "./navbar";
import { Sidebar } from "./sidebar";

const items = [
  { title: "General", href: "/profile" },
  { title: "Telegram", href: "/profile/telegram" },
];

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="container my-4 flex w-screen flex-col">
      <div className="mb-4 space-y-2">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-gray-400">Manage your accounts settings</p>
      </div>
      <Separator className="mb-4" />
      <div className="flex flex-col gap-4 md:flex-row">
        <ScrollArea className="whitespace-nowrap md:hidden">
          <NavBar items={items} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Sidebar items={items} className="hidden w-1/5 md:flex md:flex-col" />
        {/* <div className="pt-2 max-md:px-2">{children}</div> */}
        {children}
      </div>
    </div>
  );
}
