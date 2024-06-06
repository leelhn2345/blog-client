"use client";

import { Spinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sessionLogout } from "@/lib/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: "required" }),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password must be at most 20 characters long")
      .regex(
        /[!@#$%^&*~(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, { message: "required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;

type Props = {
  postNewPassword: (
    values: ChangePasswordData,
  ) => Promise<undefined | { error: string }>;
};

export function ChangePasswordForm({ postNewPassword }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: ChangePasswordData) {
    const loading = toast("changing password...");
    const res = await postNewPassword(values);
    toast.dismiss(loading);

    if (res) {
      toast.error(res.error, { duration: 2000 });
    } else {
      toast.success(
        "password successfully changed. please relogin with new password.",
        { duration: 4000 },
      );
      // setOpen(false);
      form.reset();
      sessionLogout();
      router.push("/");
      router.refresh();
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="ring-teal-900 hover:ring-2" variant="secondary">
          Change Password
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              startTransition(async () => await onSubmit(data)),
            )}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? <Spinner /> : "Confirm"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
