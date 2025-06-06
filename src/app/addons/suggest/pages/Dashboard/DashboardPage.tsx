import { Plus, Search } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { StatBlock } from "./components/StatBlock";
import { IdeaList } from "./components/IdeaList";
import { CommentList } from "../../components/CommentList";
import { UserList } from "./components/UserList";
import { FilterBar } from "./components/FilterBar";
import { AddUser } from "./components/AddUser";

const DashboardPage = () => {
  return (
    <>
      <header className="flex items-center">
        <div className="flex-1">
          <h1 className="page-title flex-1">Dashboard</h1>
          <p className="page-description">Something something</p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search"
            id="search"
            name="search"
            className="w-[150px] focus:w-[300px] transition-all duration-500"
          />
          <label htmlFor="search" className="cursor-pointer">
            <Search />
          </label>
        </div>
      </header>

      {/* stat blocks */}
      <div className="flex gap-5 mb-6">
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
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Ideas</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <FilterBar />
            <IdeaList />
          </TabsContent>
          <TabsContent value="comments">
            <CommentList />
          </TabsContent>
          <TabsContent value="users">
            <AddUser />
            <UserList />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export { DashboardPage };
