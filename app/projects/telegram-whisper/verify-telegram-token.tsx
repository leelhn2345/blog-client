"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { postTelegramVerificationToken } from "./actions";
import { Spinner } from "@/components/loading-spinner";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";

export function VerifyTelegramToken() {
  const [token, setToken] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleVerify(token: string) {
    const res = await postTelegramVerificationToken(token);
    if (res) {
      toast.error(res.error);
      return;
    }

    setToken("");
    toast.success("verified");
    revalidatePath("/projects/telegram-whisper");
  }

  return (
    <>
      <Input
        className="w-full max-w-lg"
        placeholder="enter your verification key here"
        onChange={(e) => {
          setToken(e.target.value);
        }}
        value={token}
      />
      <Button
        onClick={() => startTransition(async () => await handleVerify(token))}
      >
        {isPending ? <Spinner className="dark:text-black" /> : "Verifiy"}
      </Button>
    </>
  );
}
