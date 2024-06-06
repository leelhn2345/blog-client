import {
  PermissionBadge,
  PermissionLevels,
} from "@/components/permission-badge";
import { ChangePasswordData, ChangePasswordForm } from "./change-password-form";
import { cookies } from "next/headers";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
        <ScrollArea className="whitespace-nowrap rounded-md border p-2">
          {user.username}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <PermissionBadge permission={user.permissionLevel} />
      </div>
      <ChangePasswordForm postNewPassword={postNewPassword} />
      <div className="flex justify-between gap-x-4">
        <div className="w-1/2 space-y-2">
          <h4 className="ml-1 font-semibold">First Name</h4>
          <ScrollArea className="whitespace-nowrap rounded-md border p-2">
            {user.firstName}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="w-1/2 space-y-2">
          <h4 className="ml-1 font-semibold">Last Name</h4>
          <ScrollArea className="whitespace-nowrap rounded-md border p-2">
            {user.lastName}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="ml-1 font-semibold">Joined At</h4>
        <p className="rounded-md border p-2">{joinedString}</p>
      </div>
    </div>
  );
}
