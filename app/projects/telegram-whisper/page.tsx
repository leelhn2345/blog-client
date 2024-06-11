import Image from "next/image";
import turtleImg from "../../../public/turtle.webp";
import { VerifyTelegramToken } from "./verify-telegram-token";
import { cookies } from "next/headers";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TeleMsg } from "./tele-msg";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function fetchInfo(): Promise<boolean | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/telegram/check-user`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  return res.json();
}
export default async function Page() {
  const res = await fetchInfo();
  return (
    <div className="container my-8 flex flex-col justify-center gap-y-4">
      <div className="flex items-baseline justify-center space-x-4">
        <Image
          priority={true}
          src={turtleImg}
          alt="turtle waving hello"
          className="h-14 w-14"
        />
        <h1
          className="bg-gradient-to-br from-amber-500 to-green-600 bg-clip-text text-4xl font-bold
            text-transparent md:text-5xl"
        >
          The whisperer
        </h1>
      </div>
      {res === null && (
        <div className="flex flex-col items-center justify-center gap-y-4 space-y-4 text-center">
          <div>
            This feature is for{" "}
            <Link href="/auth">
              <Badge>members</Badge> only.
            </Link>
            <br />
            <br />
            <p>
              Please consider signing up with us to abuse the latent cloak of
              anonymity 😈.
            </p>
          </div>
          <details>
            <summary>Here{"'"}s what you can do in telegram</summary>
            <ul className="ml-8 list-disc text-start">
              <li>Send messages anonymously.</li>
              <li>Send media anonymously.</li>
            </ul>
          </details>
          <p className="inline-flex gap-x-2">
            No messages will be recorded.
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    For verification purposes, directions to this feature code
                    will be provided on request.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </div>
      )}
      {res === false && <VerifyTelegramToken />}
      {res === true && (
        <Suspense fallback={<Loading />}>
          <TeleMsg />
        </Suspense>
      )}
    </div>
  );
}
