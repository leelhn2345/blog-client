"use server";
import { cookies } from "next/headers";

export async function postTelegramVerificationToken(token: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/telegram/verify-user/${token}`,
    {
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
      },
    },
  );
  if (!res.ok) {
    const err = await res.json();

    return { error: err?.message || "please contact support" };
  }
}
