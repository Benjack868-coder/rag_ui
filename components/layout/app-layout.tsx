"use client"
import { useState } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { MobileSidebar } from "@/components/layout/app-sidebar-mobile";
import { ChatArea } from "@/components/chat/chat-area";
import { DocumentPanel } from "@/components/document-panel/document-panel";
import { MobileDocumentSheet } from "@/components/document-panel/mobile-document-sheet";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-dvh overflow-hidden bg-[#f8fafc] text-slate-900">
      {/* Desktop sidebar */}
      <aside
        className={`hidden shrink-0 overflow-hidden transition-[width] duration-300 lg:block ${
          sidebarCollapsed ? "w-[76px]" : "w-[252px]"
        }`}
      >
        <AppSidebar collapsed={sidebarCollapsed} />
      </aside>

      {/* Mobile navigation */}
      <MobileSidebar
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />

      {/* Mobile documents */}
      <MobileDocumentSheet
        open={documentsOpen}
        onOpenChange={setDocumentsOpen}
      />

      {/* Main content */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <AppHeader
          onOpenSidebar={() => setSidebarOpen(true)}
          onOpenDocuments={() => setDocumentsOpen(true)}
        />

        <div className="flex min-h-0 flex-1">
          <ChatArea/>

          {/* Desktop documents panel */}
          <aside className="hidden w-[380px] shrink-0 border-l border-slate-200 bg-white lg:flex">
            <DocumentPanel />
          </aside>
        </div>
      </div>

      {/* Optional desktop sidebar collapse control 
        <button
        type="button"
        onClick={() => setSidebarCollapsed((value) => !value)}
        className="fixed bottom-4 left-4 z-20 hidden rounded-lg border bg-white px-3 py-2 text-xs shadow-sm lg:block"
      >
        {sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      </button>*/}
    </div>
  );
}