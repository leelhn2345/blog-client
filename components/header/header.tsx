import { Sidebar } from "./sidebar";
import { NavBar } from "./navbar";
import { UserButton } from "./user-button";
import { ThemeDropDownMenu } from "./theme-menu";
import { cookies } from "next/headers";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { AppCookies } from "@/lib/session";

export function Header() {
  const cookieJar = cookies();
  const user = cookieJar.has(AppCookies.USER_ID);
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90
        backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 justify-between">
        <div className="my-auto md:hidden">
          <Sidebar />
        </div>
        <div className="hidden md:flex">
          <NavBar />
        </div>
        <div className="flex items-center gap-x-2">
          <ThemeDropDownMenu />
          {user ? (
            <UserButton />
          ) : (
            <Button variant="ghost">
              <Link href="/auth">
                <UserRound />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}