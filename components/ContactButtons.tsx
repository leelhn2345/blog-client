"use client";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactButtons() {
  return (
    <>
      <Button variant="link" className="hover:motion-safe:animate-bounce">
        <Link href="https://github.com/leelhn2345" target="_blank">
          <SiGithub className="dark:fill-white" />
        </Link>
      </Button>
      <Button variant="link" className="hover:motion-safe:animate-bounce">
        <Link href="https://www.linkedin.com/in/nelson2345/" target="_blank">
          <SiLinkedin className="dark:fill-white" />
        </Link>
      </Button>
      <Button
        variant="link"
        onClick={() => (window.location.href = "mailto:leelhn2345@outlook.com")}
        className="hover:motion-safe:animate-bounce"
      >
        <Mail className="dark:stroke-white" />
      </Button>
    </>
  );
}
