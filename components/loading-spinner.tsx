import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {}

export function LoadingSpinner({ className }: Props) {
  return (
    <Loader2
      className={cn(
        "h-8 w-8 animate-spin text-primary/60 text-white dark:text-black",
        className,
      )}
    />
  );
}
