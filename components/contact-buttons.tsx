"use client";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactButtons() {
  return (
    <>
      <Link href="https://github.com/leelhn2345" target="_blank">
        <Button variant="link" className="hover:motion-safe:animate-bounce">
          <SiGithub className="dark:fill-white" />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/nelson2345/" target="_blank">
        <Button variant="link" className="hover:motion-safe:animate-bounce">
          <SiLinkedin className="dark:fill-white" />
        </Button>
      </Link>
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
