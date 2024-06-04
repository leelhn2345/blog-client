import { ProgressPage } from "@/components/progress-page";
import { UnknownError } from "@/lib/exceptions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function fetchUserInfo() {
  const res = await fetch(`${process.env.BACKEND_URL}/user/user-info`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  if (res.status == 401) redirect("/unauthorized");

  if (!res.ok) throw new UnknownError();

  return res.json();
}

export default async function ProfilePage() {
  const userInfo = await fetchUserInfo();
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1>
        hello {userInfo.firstName} {userInfo.lastName}
      </h1>
      <p className="mb-4">sorry this page isn{"'"} ready yet</p>
      <ProgressPage pageName="this page" />
    </div>
  );
}
