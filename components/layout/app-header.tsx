import {
  Bell,
  ChevronDown,
  FileText,
  Menu,
  Search,
  Sun,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AppHeaderProps = {
  onOpenSidebar: () => void;
  onOpenDocuments: () => void;
};

export function AppHeader({
  onOpenSidebar,
  onOpenDocuments,
}: AppHeaderProps) {
  return (
    <header className="flex h-[70px] shrink-0 items-center gap-3 border-b bg-white px-3 sm:px-5">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onOpenSidebar}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="relative w-full max-w-[420px]">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          placeholder="Search documents..."
          className="h-10 bg-slate-50 pl-10"
        />
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-3">
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Sun className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={onOpenDocuments}
          aria-label="Open documents"
        >
          <FileText className="h-4 w-4" />
        </Button>

        <div className="hidden items-center gap-2 sm:flex">
          <Avatar className="h-9 w-9 bg-blue-600">
            <AvatarFallback className="bg-blue-600 text-white">
              BS
            </AvatarFallback>
          </Avatar>

          <span className="hidden text-sm font-medium xl:inline">
            Benjamin Sumilhig
          </span>

          <ChevronDown className="h-4 w-4 text-slate-500" />
        </div>

        <Button variant="ghost" size="icon" className="sm:hidden">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}