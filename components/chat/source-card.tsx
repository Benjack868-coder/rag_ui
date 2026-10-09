import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PolicySource } from "@/app/types/policy";

type Props = {
  source: PolicySource;
};

export function SourceCard({ source }: Props) {
  return (
    <div className="rounded-lg border border-slate-200 p-3">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-50">
          <FileText className="h-5 w-5 text-red-500" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <p className="text-xs font-semibold text-[#18365f]">
              {source.name}
            </p>

            <Badge className="rounded-full bg-emerald-50 text-[10px] font-normal text-emerald-700 hover:bg-emerald-50">
              Relevance: {source.relevance}
            </Badge>
          </div>

          <p className="mt-1 text-[10px] text-slate-400">
            {source.page} · Section: {source.section}
          </p>

          <p className="mt-2 text-[11px] leading-5 text-slate-500">
            {source.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}