import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center">
      <div className="space-y-4 text-center">
        <h1
          className="bg-gradient-to-br from-amber-500 to-green-600 bg-clip-text text-4xl font-bold
            text-transparent"
        >
          ~ In Progress ~
        </h1>
        <p className="">
          Sorry, <span className="text-xl font-bold">blog</span> is not
          available currently.
        </p>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
