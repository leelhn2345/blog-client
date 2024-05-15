import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="container flex items-center justify-center">
      <LoadingSpinner />
    </div>
    // <Skeleton className="container flex items-center justify-center rounded-2xl" />
  );
}
