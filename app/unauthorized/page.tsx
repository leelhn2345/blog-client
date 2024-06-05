import { Button } from "@/components/ui/button";
import { AppCookies } from "@/lib/cookies.type";
import { cookies } from "next/headers";
import Link from "next/link";
import { ReloginButton } from "./relogin-button";
import { sessionLogout } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function UnauthorizedPage() {
  const loggedIn = cookies().has(AppCookies.USER_ID);

  async function relogin() {
    "use server";
    await sessionLogout();
    redirect("/auth");
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-y-4">
      {loggedIn ? (
        <>
          <h1 className="text-3xl font-bold">Credentials Sync Error</h1>
          <p>There may have been changes to the server.</p>
          <p>We seek your kind understanding.</p>
          <p>
            Please <ReloginButton relogin={relogin} /> .
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Unauthorized User</h1>
          <p>
            You need to{" "}
            <Link href="/auth">
              <Button>Login</Button>
            </Link>
            to view this page.
          </p>
        </>
      )}
    </div>
  );
}
