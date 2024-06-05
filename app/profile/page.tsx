import { UnknownError } from "@/lib/exceptions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";
import { ProfileInfo, UserInfo } from "./profile-info";

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
  const user = await fetchUserInfo();
  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-xl font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Profile information page.
        </p>
      </div>
      <Separator />
      <ProfileInfo user={user} />
    </div>
  );
}
