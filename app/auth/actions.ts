"use server";

import { sessionLogin } from "@/lib/session";

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
  await sessionLogin(res);
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

  await sessionLogin(res);
}
