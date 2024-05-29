/**
 * cookies are from these routes
 *  - `/user/login`
 *  - `/user/sign-up`
 */
export enum AppCookies {
  USER_ID = "gardener.id",
  USER_INFO = "userInfo",
}

enum PermissionLevel {
  MEMBER = "member",
  ADMIN = "admin",
  ALPHA = "alpha",
}

export type UserInfo = {
  firstName: string;
  lastName: string;
  permission: PermissionLevel;
};
