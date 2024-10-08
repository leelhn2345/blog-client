import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p>We{"'"}re sorry, we could not process your request at the moment.</p>
        <p>The site is in midst of server upgrade and migration.</p>
        <br />
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
