import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { DocumentPanel } from "@/components/document-panel/document-panel";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileDocumentSheet({
  open,
  onOpenChange,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col p-0 sm:max-w-[400px]"
      >
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle>Documents & Research</SheetTitle>
        </SheetHeader>

        <DocumentPanel />
      </SheetContent>
    </Sheet>
  );
}