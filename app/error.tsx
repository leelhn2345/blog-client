"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1
        className="bg-gradient-to-bl from-red-800 to-purple-400 bg-clip-text text-center text-4xl
          font-bold text-transparent dark:bg-gradient-to-tr dark:to-purple-800"
      >
        {error.message}
      </h1>
      <div className="mt-10 space-x-9">
        <Button variant="outline" onClick={reset}>
          Try Again
        </Button>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
