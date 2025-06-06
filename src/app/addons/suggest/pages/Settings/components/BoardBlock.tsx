import { Button } from "@/app/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { DropdownMenu } from "@/app/components/ui/dropdown-menu";
import { link } from "@/app/shared/links";
import {
  ChartLine,
  Ellipsis,
  Eye,
  MessageCircle,
  Pencil,
  Trash,
  TrendingUp,
} from "lucide-react";
import React from "react";

const BoardBlock = () => {
  return (
    <div className="box p-5 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold">Board Block</h3>
        <p className="section-description">Something something</p>
      </div>

      <div className="board-buttons">
        <Button asChild variant="ghost">
          <a href={`${link("/suggest/:id", { id: "1" })}#comments`}>
            <MessageCircle />
            15
          </a>
        </Button>

        <Button asChild variant="ghost">
          <a href={`${link("/suggest/:id", { id: "1" })}#comments`}>
            <ChartLine />
            102
          </a>
        </Button>

        <Button asChild variant="ghost">
          <a href={`${link("/suggest/:id", { id: "1" })}#comments`}>
            <TrendingUp />
            10%
          </a>
        </Button>

        <div className="flex items-center gap-x-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href={link("/suggest/board/:id", { id: "1" })}>
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
    </div>
  );
};

export { BoardBlock };
