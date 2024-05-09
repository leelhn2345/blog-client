import { ContactButtons } from "@/components/ContactButtons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p
          className="text-balance text-center text-sm leading-loose text-muted-foreground
            md:text-left"
        >
          Built using{" "}
          <Link
            href="https://nextjs.org/"
            className="font-medium underline underline-offset-4"
            target="_blank"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://github.com/tokio-rs/axum"
            className="font-medium underline underline-offset-4"
            target="_blank"
          >
            Axum
          </Link>
          . The source code is available{" "}
          <Link
            href="#"
            className="font-medium underline underline-offset-4"
            target="_blank"
          >
            here (client)
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="font-medium underline underline-offset-4"
            target="_blank"
          >
            here (server)
          </Link>
          .
        </p>
        <div className="flex">
          <ContactButtons />
        </div>
      </div>
    </footer>
  );
}
