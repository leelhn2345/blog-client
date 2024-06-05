"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ChangePasswordForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Change Password</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          Change Password
          <DialogDescription>wow</DialogDescription>
        </DialogHeader>
        <div></div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
