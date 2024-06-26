"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorProps) {
  return (
    <div className="container flex flex-col items-center justify-center gap-y-6 text-center">
      <h1
        className="bg-gradient-to-bl from-red-800 to-purple-400 bg-clip-text text-center text-4xl
          font-bold text-transparent dark:bg-gradient-to-tr dark:to-purple-800"
      >
        Bad Request
      </h1>
      <p>Sorry, we couldn{"'"}t find the resources you requested.</p>
      <div className="flex gap-x-4">
        <Button variant="outline" onClick={() => reset()}>
          Try Again
        </Button>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="destructive">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
}
