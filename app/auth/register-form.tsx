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
import { registerUser } from "./actions";
import { useRouter } from "next/navigation";
import { NewUserCreds, newUserFormSchema } from "./schema";
import { LoadingSpinner } from "@/components/loading-spinner";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<NewUserCreds>({
    resolver: zodResolver(newUserFormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(values: NewUserCreds) {
    const data: NewUserCreds = {
      ...values,
      username: values.username.toLowerCase(),
    };
    const loading = toast("loading...");
    const res = await registerUser(data);
    toast.dismiss(loading);

    if (res) {
      toast.error(res.error, { duration: 2000 });
    } else {
      router.push("/");
      toast.success(
        "account created. please proceed with email verification.",
        { duration: 4000 },
      );
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
              <FormDescription>This is your username.</FormDescription>
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
              <FormDescription>Please retype your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input required placeholder="Joe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Biden" {...field} />
              </FormControl>
              <FormMessage />
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
