import React from "react";
import { Avatar } from "./components/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { link } from "@/app/shared/links";
import { LayoutProps } from "rwsdk/router";

export const Layout = ({ children, requestInfo }: LayoutProps) => {
  const { params } = requestInfo;
  console.log({ params });
  return (
    <main className="p-[100px]">
      <div className="absolute top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <a href={link("/suggest/settings")}>My Account</a>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {children}
    </main>
  );
};
