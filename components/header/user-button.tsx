"use client";
import { Button } from "../ui/button";
import { LogOut, UserRoundCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { UnknownError } from "@/lib/exceptions";
import { useRouter } from "next/navigation";

export function UserButton() {
  const router = useRouter();

  async function logout() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/user/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );
      router.refresh();
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }
    } catch (_) {
      throw new UnknownError();
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <UserRoundCheck />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
