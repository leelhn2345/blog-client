import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center ">
      <div className="space-y-4 text-center">
        <h2>Page Not Found</h2>
        <p>We{"'"}re sorry, we could not find the requested resource.</p>
        <Button>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
