"use client";

import { Button } from "@/app/components/ui/button";
import { link } from "@/app/shared/links";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Ellipsis, Eye, Pencil, Trash, Tag as TagIcon } from "lucide-react";
import { Swatch } from "../../../components/Swatch";

const TagBlock = () => {
  return (
    <div className="box p-5 flex items-center gap-x-4">
      <div className="flex-1 flex items-center gap-x-4">
        <Swatch />
        <h3 className="text-lg font-bold">Tag Block</h3>
      </div>
      <div className="board-buttons">
        <Button variant="ghost">
          <TagIcon />
          15
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <a href={link("/suggest/dashboard")}>
                <Eye />
                View
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <Trash className="text-destructive" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export { TagBlock };
