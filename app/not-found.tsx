import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="font-bold">Page Not Found</h2>
        <p>We{"'"}re sorry, we could not process your request.</p>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
