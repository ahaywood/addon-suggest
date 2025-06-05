import { Avatar } from "../components/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { link } from "@/app/shared/links";
import { LayoutProps } from "rwsdk/router";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="p-[100px]">
      <div className="absolute top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <a href={link("/suggest/settings")}>My Account</a>
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
