import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { link } from "@/app/shared/links";
import { ChevronUp, MessageCircle, Eye, EyeOff } from "lucide-react";
import { Avatar } from "../../../components/Avatar";

export const IdeaBlock = () => {
  return (
    <div className="flex gap-5 items-center border-1 py-3 pl-3 pr-5 border-gray-200 rounded-md mb-2">
      <div>
        <Button
          variant="ghost"
          className="flex flex-col min-h-[100px] gap-1 hover:bg-violet-500 hover:text-white cursor-pointer"
        >
          <div className="-mb-2">
            <ChevronUp size={30} className="size-8" />
          </div>
          <div className="font-bold text-xl">4</div>
          <div>Vote</div>
        </Button>
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">
          <a
            href={link("/suggest/:id", { id: "1" })}
            className="hover:text-violet-600"
          >
            Idea Title
          </a>
        </h2>
        <div className="flex items-center gap-1">
          <Badge>YouTube Video</Badge>
          <Badge>YouTube Video</Badge>
          <Badge>YouTube Video</Badge>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Button asChild variant="ghost">
          <a href={link("/suggest/:id", { id: "1" })}>
            <EyeOff />
            Private
          </a>
        </Button>

        <Button asChild variant="ghost">
          <a href={link("/suggest/:id", { id: "1" })}>
            <MessageCircle />
            15 Comments
          </a>
        </Button>

        <Button asChild variant="ghost">
          <a href={link("/suggest/:id", { id: "1" })}>Details</a>
        </Button>
      </div>
    </div>
  );
};
