import { Button } from "@/components/ui/button";
import Link from "next/link";

async function verifyAccount(token: string) {
  const queryParams = new URLSearchParams({
    token,
  });
  const res = await fetch(
    `${process.env.BACKEND_URL}/user/sign-up-verification?${queryParams}`,
    {
      method: "PUT",
    },
  );
  return res;
}

type PageProps = {
  searchParams: { token: string };
};

export default async function AccountVerificationPage({
  searchParams,
}: PageProps) {
  const res = await verifyAccount(searchParams.token);
  if (!res.ok) {
    return (
      <div className="container mt-10">
        <p>Sorry, there are errors pending your account verification.</p>
        <p>Please contact support for help.</p>
      </div>
    );
  }
  return (
    <div className="container mt-10">
      <p>Congrats! You are now verified!</p>
      <br />
      you may now{" "}
      <Link href="/auth">
        <Button>login</Button>
      </Link>
      .
    </div>
  );
}
