import {
  PermissionBadge,
  PermissionLevels,
} from "@/components/permission-badge";
import { z } from "zod";
import { ChangePasswordForm } from "./change-password-form";

const changePasswordSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password must be at most 20 characters long")
      .regex(
        /[!@#$%^&*~(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;

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
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="ml-1 font-semibold">Username / Email</h4>
        <p className="rounded-md border p-2">{user.username}</p>
        <PermissionBadge permission={user.permissionLevel} />
      </div>
      <ChangePasswordForm />
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
