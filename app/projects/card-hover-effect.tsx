"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { HTMLAttributes, useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

enum Publicity {
  PUBLIC = "public",
  MEMBER = "member",
}
interface Props extends HTMLAttributes<HTMLElement> {
  items: {
    name: string;
    summary: string;
    url: string;
    publicity: Publicity;
  }[];
}
export const HoverEffect = ({ items, className }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function isExternalLink(urlString: string): boolean {
    try {
      const url = new URL(urlString);
      return (
        !!url.protocol &&
        (url.protocol === "http:" || url.protocol === "https:")
      );
    } catch (e) {
      // If the URL constructor throws an error, it's likely a relative URL
      return false;
    }
  }
  return (
    <div
      className={cn(
        "var(--) grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.url}
          key={idx}
          className="group relative block h-full w-full p-2"
          target={isExternalLink(item.url) ? "_blank" : undefined}
          referrerPolicy={isExternalLink(item.url) ? "no-referrer" : undefined}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200
                  dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className="relative z-20 h-full w-full overflow-hidden rounded-2xl border border-slate-700
              bg-white p-4 group-hover:border-slate-700 dark:border-white/[0.2] dark:bg-black"
          >
            <CardTitle className="mt-4 font-bold tracking-wide dark:text-zinc-100">
              <div className="flex items-center gap-x-2">
                <p>{item.name}</p>
                {item.publicity === Publicity.MEMBER && <Badge>Member</Badge>}
              </div>
            </CardTitle>
            <CardDescription className="mt-8 text-sm leading-relaxed tracking-wide text-zinc-500 dark:text-zinc-400">
              {item.summary}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};
