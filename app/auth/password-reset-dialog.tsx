"use client";

import { ZodError, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState, useTransition } from "react";
import { toast } from "sonner";
import { resetPassword } from "./actions";
import { LoadingSpinner } from "@/components/loading-spinner";

export function PasswordResetDialog() {
  const emailParser = z.string().email();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const emailString = e.target.value;
    setEmail(emailString);
  }
  async function handleSubmit() {
    try {
      const parseResults = emailParser.parse(email);
      await resetPassword(parseResults);
      setEmail("");
      setOpen(false);
      toast.info("check your email");
    } catch (e) {
      if (e instanceof ZodError) {
        toast.error("invalid email format");
      }
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="hover:cursor-pointer hover:underline">
          Forgot Password
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogDescription>
            <p>Enter the email used when you sign-up.</p>
            <br />
            <p>
              If it is a registered email, we will send you an email to reset
              the password.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              placeholder="user@email.com"
              className="col-span-3"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => startTransition(async () => await handleSubmit())}
          >
            {isPending ? <LoadingSpinner /> : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
