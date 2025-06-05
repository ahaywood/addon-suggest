"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { link } from "@/app/shared/links";
import { Plus } from "lucide-react";
import { ChevronUp } from "lucide-react";

const IdeaDetails = () => {
  return (
    <>
      <header className="flex gap-x-5 items-center !mb-4">
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
          <div className="flex justify-between">
            <h1 className="page-title mb-3">IndividualPage</h1>
            <div className="flex gap-x-3">
              <Button variant="default" asChild>
                <a href={link("/suggest/new")}>
                  <Plus />
                  New Idea
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-2">
                <Badge>YouTube Video</Badge>
                <Badge>YouTube Video</Badge>
                <Badge>YouTube Video</Badge>
              </div>
              <p className="page-description">Posted 7 hours ago</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { IdeaDetails };
