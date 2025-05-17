"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";

export const CommentForm = () => {
  return (
    <form className="flex gap-x-5">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">Add your comment</h3>
        <div className="field mb-3">
          <Textarea />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
