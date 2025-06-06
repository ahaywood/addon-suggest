"use client";

import { TabsContent } from "@/app/components/ui/tabs";
import { Tabs, TabsTrigger } from "@/app/components/ui/tabs";
import { TabsList } from "@/app/components/ui/tabs";
import { IdeaList } from "../Dashboard/components/IdeaList";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import { link } from "@/app/shared/links";

const BoardPage = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="page-title flex-1">YouTube Board</h1>
        <Button asChild>
          <a href={link("/suggest/new")}>
            <Plus />
            New Idea
          </a>
        </Button>
      </header>
      <div>
        <Tabs defaultValue="ideas" className="w-full">
          <TabsList>
            <TabsTrigger value="ideas">Ideas</TabsTrigger>
            <TabsTrigger value="working-on">Working On</TabsTrigger>
            <TabsTrigger value="finished">Finished</TabsTrigger>
          </TabsList>
          <TabsContent value="ideas">
            <IdeaList />
          </TabsContent>
          <TabsContent value="working-on">
            <IdeaList />
          </TabsContent>
          <TabsContent value="finished">
            <IdeaList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export { BoardPage };
