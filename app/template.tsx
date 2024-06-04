"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      className="flex flex-1"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
