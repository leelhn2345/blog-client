import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <Loader2
      className={cn(
        "h-8 w-8 animate-spin text-primary/60 text-white dark:text-black",
        className,
      )}
    />
  );
}
