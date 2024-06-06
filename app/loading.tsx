import { Spinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="container flex items-center justify-center">
      <Spinner />
    </div>
  );
}
