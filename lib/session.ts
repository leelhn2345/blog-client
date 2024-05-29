"use server";
import { cookies } from "next/headers";
import { AppCookies, UserInfo } from "./cookies.type";

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

/**
 * login & starts session
 */
export async function sessionLogin(res: Response) {
  const cookieResponse = res.headers.getSetCookie();

  const sessionCookies = cookieResponse.map((cookieString) => {
    const [key, ...value] = cookieString.split("=");

    return [key, value.join("=").split(";")[0]];
  });

  sessionCookies.map((cookie) =>
    cookies().set({
      name: cookie[0],
      value: cookie[1],
      sameSite: "strict",
      httpOnly: true,
      path: "/",
      secure: true,
      expires: Date.now() + 60 * 60 * 24 * 7 * 4 * 1000, // 4 weeks from now
    }),
  );
}

/**
 * logs user out
 */
export async function sessionLogout() {
  await fetch(`${process.env.BACKEND_URL}/user/logout`, {
    method: "POST",
  });
  const appCookies = Object.values(AppCookies);
  appCookies.map((cookieName) => cookies().delete(cookieName));
}
