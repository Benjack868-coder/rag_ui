import { useState } from "react";
import { Bot, ChevronDown, ChevronUp } from "lucide-react";

import { sources } from "@/app/data/mock-data";
import { SourceCard } from "@/components/chat/source-card";

export function SourceList() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="overflow-hidden rounded-b-xl border-x border-b border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="flex w-full items-center gap-2 px-4 py-3 text-sm font-semibold text-[#10294d]"
      >
        <Bot className="h-4 w-4 text-blue-600" />
        Sources
        <span className="ml-auto text-xs font-normal text-slate-400">
          {sources.length} sources
        </span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-slate-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-400" />
        )}
      </button>

      {expanded && (
        <div className="space-y-2 border-t border-slate-100 p-3">
          {sources.map((source) => (
            <SourceCard key={source.name} source={source} />
          ))}
        </div>
      )}
    </section>
  );
}