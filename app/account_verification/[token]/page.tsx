import { Button } from "@/components/ui/button";
import Link from "next/link";

async function verifyAccount(token: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/user/sign-up-verification/${token}`,
    {
      method: "PUT",
    },
  );
  return res;
}
type PageProps = {
  params: { token: string };
};

export default async function AccountVerificationPage({ params }: PageProps) {
  const res = await verifyAccount(params.token);
  if (!res.ok) {
    return (
      <div className="container mt-10">
        <p>sorry there are issues verifiying you.</p>
        <p>Please contact support for help.</p>
      </div>
    );
  }
  return (
    <div className="container mt-10">
      <p>you are now verified!</p>
      <br />
      you may now{" "}
      <Link href="/auth">
        <Button>login</Button>
      </Link>
      .
    </div>
  );
}
