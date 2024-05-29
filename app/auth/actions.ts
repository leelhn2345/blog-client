"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function saveCookies(res: Response) {
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

  redirect("/");
}

export async function loginUser(userLoginCreds: Record<string, string>) {
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
  saveCookies(res);
}

export async function registerUser(newUserCreds: Record<string, string>) {
  const res = await fetch(`${process.env.BACKEND_URL}/user/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserCreds),
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  saveCookies(res);
}
