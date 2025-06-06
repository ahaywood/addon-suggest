import { Button } from "@/app/components/ui/button";
import { Avatar } from "../components/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { link } from "@/app/shared/links";
import { Plus } from "lucide-react";
import { LayoutProps } from "rwsdk/router";
import { ThemePicker } from "../components/ThemePicker";

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

        <ThemePicker />

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
