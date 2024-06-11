"use server";
import { UnknownError } from "@/lib/exceptions";
import { revalidatePath } from "next/cache";
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
    try {
      const err = await res.json();
      return { error: err.message };
    } catch (error) {
      return { error: "invalid request" };
    }
  }
  revalidatePath("/projects/telegram-whisper");
}

export async function availableChats() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/telegram/chats-available`,
    {
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
    },
  );
  if (!res.ok) {
    throw new UnknownError();
  }
  return res.json();
}
