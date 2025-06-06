"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { link } from "@/app/shared/links";
import {
  CornerDownRight,
  Ellipsis,
  Eye,
  EyeOff,
  Pencil,
  Star,
  Trash,
} from "lucide-react";

const CommentBlock = () => {
  return (
    <div className="flex gap-x-5 p-5 box relative">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1">
        {/* only display this on the admin page */}
        <a
          href={`${link("/suggest/:id", { id: "1" })}#comment-1`}
          className="font-mono tracking-wider uppercase flex items-center gap-x-1 hover:underline underline-offset-2"
        >
          <CornerDownRight
            size={16}
            className="text-zinc-400 relative -top-[2px]"
          />
          YouTube Idea
        </a>
        <div className="flex justify-between items-center">
          <div className="mb-2 flex gap-x-2 items-center flex-1">
            <div className="text-lg flex items-center gap-x-2">
              <strong>Amy Dutton</strong>
              {/* admin badge */}
              <Badge className="bg-yellow-300 text-yellow-700 text-xs">
                <Star className="size-3 fill-yellow-700 text-yellow-700" />
                Admin
              </Badge>
              {/* author badge */}
              <Badge className="bg-cyan-300 text-cyan-700 text-xs">
                <Pencil className="size-3 text-cyan-700 stroke-3" />
                Author
              </Badge>
            </div>
            <div className="text-neutral-500 text-sm">
              Posted 7 hours ago
            </div>{" "}
          </div>
          <div className="absolute top-3 right-3">
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

export { CommentBlock };
