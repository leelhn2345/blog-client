"use server";
import { UnknownError } from "@/lib/exceptions";
import { revalidatePath, revalidateTag } from "next/cache";
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

export type AvailableChats = {
  telegramChatId: string;
  title?: string;
};

export async function availableChats(): Promise<AvailableChats[]> {
  const res = await fetch(
    `${process.env.BACKEND_URL}/telegram/chats-available`,
    {
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
      next: { tags: ["telechats"] },
    },
  );
  if (!res.ok) {
    throw new UnknownError();
  }
  return res.json();
}

export async function refreshTeleChats() {
  revalidateTag("telechats");
}

export async function postAnonMsg(chatId: string, text: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/telegram/message/${chatId}`,
    {
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
      },
      body: text,
    },
  );

  if (!res.ok) {
    try {
      const err = await res.json();
      return { error: err.message };
    } catch (_) {
      return { error: "unknown error. please contact support" };
    }
  }
}
