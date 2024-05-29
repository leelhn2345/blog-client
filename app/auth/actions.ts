"use server";

import { cookies } from "next/headers";

export async function testLogin(userLoginCreds: Record<string, string>) {
  const res = await fetch(`${process.env.BACKEND_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLoginCreds),
    credentials: "include",
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
  const cookieResponse = res.headers.getSetCookie();
  const sessionCookies = cookieResponse.map((cookieString) => {
    const [key, ...value] = cookieString.split("=");
    return [key, value.join("=").split(";")[0]];
  });
  console.log(sessionCookies);
  sessionCookies.map((cookie) =>
    cookies().set({
      name: cookie[0],
      value: cookie[1],
      sameSite: "strict",
      httpOnly: true,
      path: "/",
      secure: true,
      expires: Date.now() + 60 * 60 * 24 * 7 * 4 * 1000,
    }),
  );
  console.log(cookies().getAll());
}
