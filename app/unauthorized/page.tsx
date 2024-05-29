import { Button } from "@/components/ui/button";
import { AppCookies } from "@/lib/session";
import { cookies } from "next/headers";
import Link from "next/link";

export default function UnauthorizedPage() {
  const loggedIn = cookies().has(AppCookies.USER_ID);

  return (
    <div className="container flex flex-col items-center justify-center gap-y-4">
      {loggedIn ? (
        <>
          <h1 className="text-3xl font-bold">Changes to the server</h1>
          <p>Please relogin</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Unauthorized User</h1>
          <p>
            You need to{" "}
            <Button>
              <Link href="/auth">Login</Link>
            </Button>{" "}
            to view this page.
          </p>
        </>
      )}
    </div>
  );
}
