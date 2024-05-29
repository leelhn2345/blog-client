"use client";

import { z } from "zod";
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
import { useRouter } from "next/navigation";
import { testLogin } from "./actions";

const loginFormSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z.string(),
});

type LoginCreds = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<LoginCreds>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function loginUser(userLoginCreds: LoginCreds) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginCreds),
      credentials: "include",
    });
    console.log(res.headers.getSetCookie());
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    // router.push("/");
    // router.refresh();
  }

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    toast.promise(() => testLogin(values), {
      loading: "loading...",
      success: "welcome back",
      error: (data) => data,
      duration: 1000,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          startTransition(() => onSubmit(data)),
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
              <FormDescription>This will be your username.</FormDescription>
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
        <Button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
