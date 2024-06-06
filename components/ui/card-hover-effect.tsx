"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { HTMLAttributes, useState } from "react";
import { Card, CardDescription, CardTitle } from "./card";

interface Props extends HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
}
export const HoverEffect = ({ items, className }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "var(--) grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
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
              bg-white/70 p-4 group-hover:border-slate-700 dark:border-white/[0.2]
              dark:bg-black/70"
          >
            <CardTitle className="mt-4 font-bold tracking-wide dark:text-zinc-100">
              {item.title}
            </CardTitle>
            <CardDescription className="mt-8 text-sm leading-relaxed tracking-wide text-zinc-500 dark:text-zinc-400">
              {item.description}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};
