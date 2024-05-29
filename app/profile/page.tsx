import { ProgressPage } from "@/components/progress-page";
import { UnknownError } from "@/lib/exceptions";
import { getUserInfo } from "@/lib/session";
import { cookies } from "next/headers";

async function fetchUserInfo() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/user/user-info`, {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });

    if (!res.ok) throw new Error("can't get user info");
    return res.json();
  } catch (_) {
    throw new UnknownError();
  }
}
export default async function ProfilePage() {
  const userInfo = await fetchUserInfo();
  console.log(userInfo);
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
