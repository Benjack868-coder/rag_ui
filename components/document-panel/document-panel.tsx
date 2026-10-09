import { useMemo, useState } from "react";
import { Clock3, FileText, Plus, Search } from "lucide-react";

import { documents, recentChats } from "@/app/data/mock-data";
import { DocumentRow } from "@/components/document-panel/document-row";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function DocumentPanel() {
  const [search, setSearch] = useState("");

  const filteredDocuments = useMemo(
    () =>
      documents.filter((document) =>
        document.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <Tabs defaultValue="documents" className="flex min-h-0 flex-1 flex-col">
        <TabsList variant="line" className="h-[58px] mt-4 w-full shrink-0 justify-start gap-5 rounded-none border-b bg-white px-4">
          <TabsTrigger
            value="documents"
            className="h-full rounded-none border-b-2 border-transparent px-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            <FileText className="mr-2 h-4 w-4" />
            Documents
          </TabsTrigger>

          <TabsTrigger
            value="recent"
            className="h-full rounded-none border-b-2 border-transparent px-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            <Clock3 className="mr-2 h-4 w-4" />
            Recent Chats
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="documents"
          className="m-0 flex min-h-0 flex-1 flex-col"
        >
          <div className="flex gap-2 p-4">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search documents..."
                className="h-10 pl-9 text-sm"
              />
            </div>

            <Button variant="outline" className="h-10 shrink-0">
              All
            </Button>
          </div>

          <div className="flex items-center justify-between gap-2 px-4 pb-3">
            <h2 className="text-sm font-semibold text-[#10294d]">
              Your Documents
              <span className="ml-1 font-normal text-slate-400">
                ({filteredDocuments.length})
              </span>
            </h2>

            <Button
              size="sm"
              variant="outline"
              className="shrink-0 border-blue-200 text-blue-600"
            >
              <Plus className="mr-1 h-4 w-4" />
              Upload
            </Button>
          </div>

          <ScrollArea className="min-h-0 flex-1">
            <div className="space-y-1 px-3 pb-4">
              {filteredDocuments.map((document) => (
                <DocumentRow key={document.name} document={document} />
              ))}

              {filteredDocuments.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-slate-500">
                  No documents found.
                </p>
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="recent" className="m-0 p-4">
          <div className="space-y-2">
            {recentChats.map((chat) => (
              <button
                key={chat}
                className="w-full rounded-lg border p-3 text-left text-sm hover:bg-slate-50"
              >
                {chat}
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}