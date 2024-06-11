"use client";

import { RefreshCw } from "lucide-react";
import { HTMLAttributes, useTransition } from "react";
import { AvailableChats, postAnonMsg, refreshTeleChats } from "./actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Spinner } from "@/components/loading-spinner";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  chatId: z.string(),
  message: z.string(),
});

interface Props extends HTMLAttributes<HTMLElement> {
  data: AvailableChats[];
}
export function TeleMsgForm({ data }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: "",
    },
  });
  const [isPending, startTransition] = useTransition();

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const res = await postAnonMsg(values.chatId, values.message);
    if (res) {
      toast.error(res.error, { duration: 3000 });
      return;
    }
    toast.success("message successfully sent");
    form.resetField("message");
  }
  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit((values) =>
          startTransition(async () => await onSubmit(values)),
        )}
      >
        <FormField
          control={form.control}
          name="chatId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chat Rooms</FormLabel>
              <div className="flex gap-4">
                <Select required onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a chat to send messages to" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {data.map((x) => (
                      <SelectItem
                        value={x.telegramChatId.toString()}
                        key={x.telegramChatId}
                      >
                        {x.title || ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  onClick={() =>
                    startTransition(async () => await refreshTeleChats())
                  }
                  disabled={isPending}
                >
                  {isPending ? <Spinner /> : <RefreshCw />}
                </Button>
              </div>
              <FormDescription>
                Use `/whisper` in new chat room to add new chat room.
                <br />
                Click on the refresh button to load new chat rooms.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  required
                  placeholder="Type your anonymous message here"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
                <br />
                Message will be parsed in markdown format.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
