import Link from "next/link";
import { Button } from "./ui/button";
import { cookies } from "next/headers";

export function UserButton() {
  const cookieJar = cookies();
  const user = cookieJar.get("gardener.id");
  return (
    <Button>
      {user ? <div>hello</div> : <Link href="/auth">Login / Register</Link>}
    </Button>
  );
}
