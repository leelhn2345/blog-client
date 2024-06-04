"use server";

import { sessionLogin } from "@/lib/session";
import type { LoginCreds, NewUserCreds } from "./schema";

export async function loginUser(userLoginCreds: LoginCreds) {
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
    // throw new Error(error.message);
    return { error: error.message };
  }
  await sessionLogin(res, userLoginCreds.staysLoggedIn);
}

export async function registerUser(newUserCreds: NewUserCreds) {
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
    return { error: error.message };
  }
}

/**
 * matters not if the request returns an error
 *
 * hacker shouldn't know if the email is registered or not
 * or the current password reset status
 */
export async function resetPassword(email: string) {
  const queryParams = new URLSearchParams({
    email,
  });
  await fetch(`${process.env.BACKEND_URL}/user/password/reset?${queryParams}`, {
    method: "POST",
  });
}
