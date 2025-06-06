import { Ellipsis } from "lucide-react";

import { Button } from "@/app/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Eye, LayoutGrid } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import { link } from "@/app/shared/links";
import { Swatch } from "../../../components/Swatch";

const ContentTypeBlock = () => {
  return (
    <div className="box p-5 flex items-center gap-x-4">
      <div className="self-start">
        <Pencil className="size-5 text-muted-foreground relative top-1" />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold">Type Block</h3>
        <p className="section-description">Something something</p>
      </div>

      <div className="button-group">
        <Button variant="ghost">
          <LayoutGrid />
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

export { ContentTypeBlock };
