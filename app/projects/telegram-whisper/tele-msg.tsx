import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function TeleMsg() {
  return (
    <div className="flex w-full justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            For chats that you want to whisper to,
            <br />
            you need to use a{" "}
            <span>
              {"`"}/whisper{"`"}
            </span>{" "}
            command in the chat.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Type your message here." />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
