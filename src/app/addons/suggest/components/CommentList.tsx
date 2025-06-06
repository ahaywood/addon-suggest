import React from "react";
import { CommentBlock } from "./CommentBlock";

export const CommentList = () => {
  return (
    <div className="flex flex-col gap-y-3 mb-10" id="comments">
      <CommentBlock />
      <CommentBlock />
      <CommentBlock />
    </div>
  );
};
