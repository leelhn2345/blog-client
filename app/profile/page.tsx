import { UnknownError } from "@/lib/exceptions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

enum PermissionLevels {
  MEMBER = "member",
  ADMIN = "admin",
  ALPHA = "alpha",
}
type UserInfo = {
  username: string;
  firstName: string;
  lastName: string;
  joinedAt: string;
  lastUpdated: string;
  permissionLevel: PermissionLevels;
};
async function fetchUserInfo(): Promise<UserInfo> {
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
  console.log(userInfo);
  return <div>{userInfo.permissionLevel}</div>;
}
