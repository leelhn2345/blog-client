import { Leaf, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex">
        <Button
          variant="link"
          size="icon"
          className="justify-start hover:text-teal-600 sm:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>
            <Leaf className="mr-4 text-teal-600" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-y-2">
          <SheetClose asChild>
            <Link className="font-semibold hover:text-teal-600" href="/">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-semibold hover:text-teal-600"
              href="/projects"
            >
              Projects
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="font-semibold hover:text-teal-600" href="/blog">
              Blog
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="font-semibold hover:text-teal-600" href="/contact">
              Contact Me
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
