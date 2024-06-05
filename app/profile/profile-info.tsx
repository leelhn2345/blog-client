import {
  PermissionBadge,
  PermissionLevels,
} from "@/components/permission-badge";
import { ChangePasswordData, ChangePasswordForm } from "./change-password-form";
import { cookies } from "next/headers";

export type UserInfo = {
  username: string;
  firstName: string;
  lastName: string;
  joinedAt: string;
  lastUpdated: string;
  permissionLevel: PermissionLevels;
};

type Props = {
  user: UserInfo;
};

export function ProfileInfo({ user }: Props) {
  const joinedString = new Date(user.joinedAt).toLocaleString();

  async function postNewPassword(values: ChangePasswordData) {
    "use server";
    const res = await fetch(`${process.env.BACKEND_URL}/user/password/change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const err = await res.json();
      return { error: err.message };
    }
  }
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="ml-1 font-semibold">Username / Email</h4>
        <p className="rounded-md border p-2">{user.username}</p>
        <PermissionBadge permission={user.permissionLevel} />
      </div>
      <ChangePasswordForm postNewPassword={postNewPassword} />
      <div className="flex justify-between gap-x-4">
        <div className="w-full space-y-2">
          <h4 className="ml-1 font-semibold">First Name</h4>
          <p className="w-full rounded-md border p-2">{user.firstName}</p>
        </div>
        <div className="w-full space-y-2">
          <h4 className="ml-1 font-semibold">Last Name</h4>
          <p className="rounded-md border p-2">{user.lastName}</p>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="ml-1 font-semibold">Joined At</h4>
        <p className="rounded-md border p-2">{joinedString}</p>
      </div>
    </div>
  );
}
