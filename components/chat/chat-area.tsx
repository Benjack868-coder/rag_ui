import { useState } from "react";
import { Bot, User } from "lucide-react";

import { AssistantResponse } from "@/components/chat/assistant-response";
import { ChatInput } from "@/components/chat/chat-input";
import { SourceList } from "@/components/chat/source-list";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "../ui/card";

type Props = {
  onOpenDocuments: () => void;
};

export function ChatArea() {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    // TODO: Send the message to your FastAPI RAG endpoint.
    console.log("User question:", message);

    setMessage("");
  }

  return (
    <main className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="shrink-0 py-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#10294d] sm:text-[28px]">
                AI Policy Assistant
              </h1>
              <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">
                Ask questions about company policies, moderation
                guidelines, SOPs, and more.
              </p>
            </div>
          </div>

          <Separator className="mt-5" />
        </div>

        <ScrollArea className="min-h-0 flex-1">
          <div className="mx-auto w-full max-w-[850px] space-y-6 pb-6 pt-3 pr-3 ">
            {/* User message */}
            <div className="flex justify-end gap-2">
              <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-[#e4f0ff] px-4 py-3 text-sm leading-6 text-[#10294d] sm:max-w-[75%]">
                When should a moderator escalate a case?
                <p className="mt-2 text-right text-[11px] text-slate-500">
                  10:24 AM ✓✓
                </p>
              </div>

              <Avatar className="mt-1 h-8 w-8 shrink-0">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Assistant message */}
            <div className="flex items-start gap-3">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarFallback className="bg-indigo-100 text-indigo-600">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <Card>
                  <CardContent>
                    <AssistantResponse />
                    <SourceList />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="shrink-0 py-4">
          <ChatInput
            value={message}
            onChange={setMessage}
            onSend={handleSend}
          />
        </div>
      </div>
    </main>
  );
}