"use client";

import { Textarea } from "@/app/components/ui/textarea";

const Editor = ({ id, className = "" }: { id: string; className?: string }) => {
  return (
    <div className="border-1 border-zinc-200 rounded-md">
      <div className="flex justify-between items-center border-b-1 border-zinc-300">
        <div className="flex gap-5 font-mono text-xs px-3 py-2">
          <button className="uppercase tracking-wider font-bold cursor-pointer bg-violet-500 text-white rounded-md px-2 py-1">
            Write
          </button>
          <button className="uppercase tracking-wider font-bold cursor-pointer text-zinc-400">
            Preview
          </button>
        </div>

        <div>
          <button>bold</button>
        </div>
      </div>
      <div className="p-3 border-b-1 border-zinc-300">
        <Textarea
          id={id}
          className={className}
          placeholder="Use Markdown to format"
        />
      </div>
      <div className="p-3">
        <div className="text-xs text-zinc-500">
          Paste, drop, or click to add files
        </div>
      </div>
    </div>
  );
};

export { Editor };
