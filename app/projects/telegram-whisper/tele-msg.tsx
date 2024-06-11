import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TeleMsgForm } from "./tele-msg-form";
import { availableChats } from "./actions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

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
        <CardFooter>
          <p className="inline-flex gap-x-2">
            No messages are recorded.
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Directions to this feature code will be provided on request.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
