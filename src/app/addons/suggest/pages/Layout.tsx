import { Button } from "@/app/components/ui/button";
import { Avatar } from "../components/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { link } from "@/app/shared/links";
import { Monitor, Moon, Plus, Sun } from "lucide-react";
import { LayoutProps } from "rwsdk/router";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="p-[100px]">
      <div className="absolute top-4 right-4 flex items-center gap-x-6">
        <Button variant="default" asChild>
          <a href={link("/suggest/new")}>
            <Plus />
            New Idea
          </a>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Sun />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Sun /> Light Mode
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Moon /> Dark Mode
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Monitor /> System Default
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <a href={link("/suggest/account")}>My Account</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={link("/suggest/settings")}>Settings</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={link("/logout")}>Logout</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {children}
    </main>
  );
};
