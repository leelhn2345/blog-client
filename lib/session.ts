import { cookies } from "next/headers";

export enum AppCookies {
  USER_ID = "gardener.id",
  USER_INFO = "userInfo",
}

enum PermissionLevel {
  MEMBER = "member",
  ADMIN = "admin",
  ALPHA = "alpha",
}

type UserInfo = {
  firstName: string;
  lastName: string;
  permission: PermissionLevel;
};

/**
 * @returns user's firstName, lastName, and permission level
 */
export async function getUserInfo() {
  const userInfo = cookies().get(AppCookies.USER_INFO)?.value;
  if (!userInfo) return undefined;

  const userInfoJson: UserInfo = JSON.parse(userInfo);
  return userInfoJson;
}

/**
 * @returns user's permission level
 */
export async function getPermissionLevel() {
  const userInfo = await getUserInfo();
  if (!userInfo) return userInfo;
  return userInfo.permission;
}
