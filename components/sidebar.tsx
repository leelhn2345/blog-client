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
import navigationData from "../data/navigation.json";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex">
        <Button
          variant="link"
          size="icon"
          className="justify-start hover:text-teal-600"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 dark:bg-background/80">
        <SheetHeader>
          <SheetTitle>
            <Leaf className="mr-4 text-teal-600" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-y-2">
          {navigationData.map((data) => (
            <SheetClose asChild key={data.name}>
              <Link
                className={`font-semibold ${pathname === data.url ? "text-teal-600" : "hover:text-teal-600"}`}
                href={data.url}
              >
                {data.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
