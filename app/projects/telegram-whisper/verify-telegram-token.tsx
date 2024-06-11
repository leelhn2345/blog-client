"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { postTelegramVerificationToken } from "./actions";
import { Spinner } from "@/components/loading-spinner";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export function VerifyTelegramToken() {
  const [token, setToken] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleVerify(token: string) {
    if (token.length === 0) {
      toast.error("can't submit empty token");
      return;
    }
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
    <div className="flex flex-col items-center gap-y-4">
      <h3 className="font-semibold">Whisperer registration steps</h3>
      <ol className="list-decimal">
        <li>
          Go to{" "}
          <Link
            href="https://t.me/baldyturtlebot"
            target="_blank"
            referrerPolicy="no-referrer"
            className="underline"
          >
            bot
          </Link>
        </li>
        <li>
          Use <span className="bg-muted">/register</span> command
        </li>
        <li>
          Copy the token.
          <br /> Valid for only 3 minutes
        </li>
        <li>Paste into the box below</li>
      </ol>
      <div className="inline-flex w-full justify-center gap-x-4">
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
      </div>
    </div>
  );
}
