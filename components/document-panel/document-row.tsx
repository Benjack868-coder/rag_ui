import { FileText, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PolicyDocument } from "@/app/types/policy";

type Props = {
  document: PolicyDocument;
};

export function DocumentRow({ document }: Props) {
  return (
    <div className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-slate-50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50">
        <FileText className="h-5 w-5 text-red-500" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[#17345c]">
          {document.name}
        </p>
        <p className="mt-1 text-[11px] text-slate-400">
          {document.date} · {document.size}
        </p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0 text-slate-400"
        aria-label={`Actions for ${document.name}`}
      >
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}