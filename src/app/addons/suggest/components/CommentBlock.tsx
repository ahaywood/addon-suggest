"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DropdownMenu } from "@/app/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/app/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { Ellipsis, Eye, EyeOff, Trash } from "lucide-react";

export const CommentBlock = () => {
  return (
    <div className="flex gap-x-5">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="mb-2 flex gap-x-2 items-center flex-1">
            <div className="text-lg">
              <strong>Amy Dutton</strong>
            </div>
            <div className="text-neutral-500 text-sm">Posted 7 hours ago</div>{" "}
            <div>
              <Badge>YouTube Video</Badge>
            </div>
          </div>
          <div className="flex gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <EyeOff />
                  Hide Comment
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash />
                  Delete Comment
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <p className="text-sm">
          Yes! I'd love to see you try crabbing. It's become really popular
          because it's relatively accessible and makes for great content.
        </p>
      </div>
    </div>
  );
};
