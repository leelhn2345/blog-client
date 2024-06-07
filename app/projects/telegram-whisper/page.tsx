import Image from "next/image";
import turtleImg from "../../../public/turtle.webp";
import { VerifyTelegramToken } from "./verify-telegram-token";

async function fetchInfo() {
  const res = await fetch(`${process.env.BACKEND_URL}/health_check`, {
    cache: "no-store",
  });
  return res;
}
export default async function Page() {
  await fetchInfo();
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
      <div className="flex justify-center gap-x-4">
        <VerifyTelegramToken />
      </div>
    </div>
  );
}
