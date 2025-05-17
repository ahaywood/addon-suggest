import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { IdeaBlock } from "./components/IdeaBlock";
import { StatBlock } from "./components/StatBlock";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { IdeaList } from "./components/IdeaList";
import { CommentList } from "./components/CommentList";
import { UserList } from "./components/UserList";
import { link } from "@/app/shared/links";
import { Layout } from "./Layout";
import { Separator } from "@/app/components/ui/separator";

const DashboardPage = () => {
  return (
    <Layout>
      <header className="flex items-center">
        <h1 className="page-title flex-1">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search"
            className="w-[150px] focus:w-[300px] transition-all duration-500"
          />
          <Button asChild>
            <a href={link("/suggest/new")}>
              <Plus />
              New Idea
            </a>
          </Button>
        </div>
      </header>

      {/* stat blocks */}
      <div className="flex gap-3 mb-4">
        <StatBlock
          label="Total Ideas"
          number="1,289"
          percentage="+10%"
          description="from last year"
        />
        <StatBlock
          label="Comments"
          number="10"
          percentage="+20%"
          description="within the last week"
          direction="down"
        />
        <StatBlock
          label="Total Votes"
          number="10"
          percentage="10%"
          description="within the last day"
          direction="up"
        />
      </div>

      <div className="relative">
        <div className="absolute right-0 top-0 flex items-center gap-2">
          <div className="text-sm text-zinc-400">Board</div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="twitter">Twitter/X</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
            </SelectContent>
          </Select>

          <Separator orientation="vertical" />

          <div className="text-sm text-zinc-400">Tags</div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="help">Help</SelectItem>
              <SelectItem value="hub">Hub</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>

          <Separator orientation="vertical" />

          <div className="text-sm text-zinc-400">Type</div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
              <SelectItem value="document">Document</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Ideas</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <IdeaList />
          </TabsContent>
          <TabsContent value="comments">
            <div className="border rounded-sm p-6 pb-0">
              <CommentList />
            </div>
          </TabsContent>
          <TabsContent value="users">
            <UserList />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export { DashboardPage };
