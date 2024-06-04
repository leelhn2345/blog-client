"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useTransition } from "react";
import { loginUser } from "./actions";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { LoginCreds, loginFormSchema } from "./schema";
import { PasswordResetDialog } from "./password-reset-dialog";
import { LoadingSpinner } from "@/components/loading-spinner";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<LoginCreds>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
      staysLoggedIn: false,
    },
  });

  async function onSubmit(values: LoginCreds) {
    const data = {
      ...values,
      username: values.username.toLowerCase(),
    };
    const loading = toast("loading...");
    const res = await loginUser(data);
    toast.dismiss(loading);

    if (res) {
      toast.error(res.error, { duration: 2000 });
    } else {
      router.refresh();
      toast.success("welcome back");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          startTransition(async () => await onSubmit(data)),
        )}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input required type="password" autoComplete="off" {...field} />
              </FormControl>
              <FormDescription>
                <PasswordResetDialog />
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="staysLoggedIn"
          render={({ field }) => (
            <FormItem className="flex items-center gap-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription className="pb-2 leading-none">
                Remember Me
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? <LoadingSpinner /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
