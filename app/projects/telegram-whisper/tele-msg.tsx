import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TeleMsgForm } from "./tele-msg-form";
import { availableChats } from "./actions";

export async function TeleMsg() {
  const res = await availableChats();
  return (
    <div className="flex w-full justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>What is your secretive message?</CardTitle>
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
          <TeleMsgForm data={res} />
        </CardContent>
      </Card>
    </div>
  );
}
