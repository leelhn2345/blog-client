"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewPasswordForm, passwordResetSchema } from "./schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/loading-spinner";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  resetToken: string;
  submitNewPassword: (
    resetToken: string,
    form: NewPasswordForm,
  ) => Promise<undefined | { error: string }>;
};
export function PasswordResetForm({ resetToken, submitNewPassword }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<NewPasswordForm>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: NewPasswordForm) {
    const loading = toast("loading...");
    const res = await submitNewPassword(resetToken, values);
    toast.dismiss(loading);
    if (res) {
      toast.error(res.error, { duration: 2000 });
    } else {
      router.push("/auth");
      toast.success("password successfully reset");
    }
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit((data) =>
          startTransition(async () => await onSubmit(data)),
        )}
      >
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input required type="password" autoComplete="off" {...field} />
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
                <Input required type="password" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
