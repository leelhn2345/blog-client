"use client";
import { Button } from "@/components/ui/button";

type Props = {
  relogin: () => Promise<void>;
};
export function ReloginButton({ relogin }: Props) {
  return <Button onClick={() => relogin()}>Relogin</Button>;
}
