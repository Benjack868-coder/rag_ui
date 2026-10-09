import {
  Bot,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Shield,
  Sparkles,
  Upload,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { label: "Chat Assistant", icon: MessageCircle },
  { label: "Documents", icon: FileText },
  { label: "Upload Document", icon: Upload },
  { label: "Search", icon: Search },
  { label: "Settings", icon: Settings },
];

type AppSidebarProps = {
  collapsed?: boolean;
  onNavigate?: (label: string) => void;
};

export function AppSidebar({
  collapsed = false,
  onNavigate,
}: AppSidebarProps) {
  return (
    <aside className="flex h-full flex-col bg-[#071b38] text-white">
      <div
        className={`flex h-[70px] items-center border-b border-white/10 ${
          collapsed ? "justify-center" : "px-5"
        }`}
      >
        <Shield className="h-9 w-9 shrink-0 text-blue-400" />

        {!collapsed && (
          <div className="ml-3">
            <h1 className="text-xl font-bold">
              Policy<span className="text-blue-400">RAG</span>
            </h1>
            <p className="text-[11px] text-slate-400">
              AI Policy & SOP Assistant
            </p>
          </div>
        )}
      </div>

      <nav className="space-y-2 px-3 py-5">
        {menuItems.map(({ label, icon: Icon }, index) => (
          <Button
            key={label}
            variant="ghost"
            onClick={() => onNavigate?.(label)}
            title={collapsed ? label : undefined}
            className={`h-11 w-full ${
              collapsed ? "justify-center px-2" : "justify-start gap-4 px-4"
            } ${
              index === 0
                ? "bg-blue-600/60 text-white hover:bg-blue-600/70"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {!collapsed && label}
          </Button>
        ))}
      </nav>

      <div className="mt-auto p-4">
        {!collapsed && (
          <div className="rounded-xl border border-blue-400/30 bg-blue-950/40 p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">RAG Powered</span>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-300">
              Get accurate answers based on your company&apos;s policies,
              SOPs, and guidelines.
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Online
            </div>
          </div>
        )}

        <Separator className="my-4 bg-white/10" />

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-slate-700 text-white">
              BS
            </AvatarFallback>
          </Avatar>

          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                Benjamin Sumilhig
              </p>
              <p className="truncate text-xs text-slate-400">
                benjamin@example.com
              </p>
            </div>
          )}

          {!collapsed && (
            <User className="h-4 w-4 text-slate-400" />
          )}
        </div>
      </div>
    </aside>
  );
}