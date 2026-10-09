import { Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export function ChatInput({ value, onChange, onSend }: Props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSend();
      }}
      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="shrink-0 text-slate-400"
        aria-label="Attach document"
      >
        <Paperclip className="h-5 w-5" />
      </Button>

      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Type your question here..."
        className="min-w-0 border-0 shadow-none focus-visible:ring-0"
      />

      <Button
        type="submit"
        size="icon"
        disabled={!value.trim()}
        className="h-10 w-10 shrink-0 rounded-lg bg-blue-600 hover:bg-blue-700"
        aria-label="Send message"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}