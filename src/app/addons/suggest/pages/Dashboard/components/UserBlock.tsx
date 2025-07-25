"use client";

import { link } from "@/app/shared/links";
import { Avatar } from "../../../components/Avatar";
import { Ban, Clock, Ellipsis, EyeOff, Star, Trash, User } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Badge } from "@/app/components/ui/badge";

const UserBlock = () => {
  return (
    <div className="flex items-center gap-4 border-border border-1 rounded-md p-3">
      <Avatar className="size-12" />
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-0">
          <a
            href={link("/suggest/user/:id", { id: "1" })}
            className="hover:text-violet-600"
          >
            Amy Dutton
          </a>
        </h2>
        <p className="text-sm text-muted-foreground">
          <a href="#">amy@ahhacreative.com</a>
        </p>
      </div>

      <div className="flex items-center gap-x-2">
        <Badge className="bg-zinc-800 text-white text-xs">
          <Clock className="size-3 " />
          Pending
        </Badge>
        <Badge className="bg-yellow-300 text-yellow-700 text-xs">
          <Star className="size-3 fill-yellow-700 text-yellow-700" />
          Admin
        </Badge>
      </div>

      <div className="action-buttons">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Star />
              Make an Admin
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User />
              Make a User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Ban />
              Block User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash />
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export { UserBlock };
