"use client";

import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import {
  BoldIcon,
  GridIcon,
  ItalicIcon,
  LinkIcon,
  ListChecks,
  ListIcon,
  ListOrderedIcon,
  Paperclip,
  TextQuoteIcon,
} from "lucide-react";
import { marked } from "marked";
import { useRef, useState } from "react";

const Editor = ({ id, className = "" }: { id: string; className?: string }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [editorMode, setEditorMode] = useState<"write" | "preview">("write");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [markdown, setMarkdown] = useState("");

  // Generic text wrapping function
  const wrapText = (wrapper: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (selectedText) {
      const newValue =
        textarea.value.substring(0, start) +
        `${wrapper}${selectedText}${wrapper}` +
        textarea.value.substring(end);
      textarea.value = newValue;
      textarea.focus();
      textarea.setSelectionRange(start + wrapper.length, end + wrapper.length);
    } else {
      const doubleWrapper = wrapper + wrapper;
      const newValue =
        textarea.value.substring(0, start) +
        doubleWrapper +
        textarea.value.substring(end);
      textarea.value = newValue;
      textarea.focus();
      textarea.setSelectionRange(
        start + wrapper.length,
        start + wrapper.length
      );
    }
  };

  // Generic line formatting function
  const formatLine = (
    marker: string,
    getNextMarker?: (prevLine: string) => string
  ) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const value = textarea.value;

    // Find line boundaries
    let lineStart = start;
    while (lineStart > 0 && value[lineStart - 1] !== "\n") {
      lineStart--;
    }

    const lineContent = value.substring(lineStart);

    if (lineContent.startsWith(marker)) {
      // Remove marker
      const newValue =
        value.substring(0, lineStart) +
        lineContent.substring(marker.length) +
        value.substring(lineStart + lineContent.length);
      textarea.value = newValue;
      textarea.focus();
      textarea.setSelectionRange(start - marker.length, start - marker.length);
    } else {
      // Add marker (potentially dynamic)
      let actualMarker = marker;
      if (getNextMarker && lineStart > 0) {
        // Get previous line for context
        let prevLineStart = lineStart - 2;
        while (prevLineStart > 0 && value[prevLineStart - 1] !== "\n") {
          prevLineStart--;
        }
        const prevLineContent = value.substring(prevLineStart, lineStart - 1);
        actualMarker = getNextMarker(prevLineContent);
      }

      const newValue =
        value.substring(0, lineStart) +
        actualMarker +
        value.substring(lineStart);
      textarea.value = newValue;
      textarea.focus();
      textarea.setSelectionRange(
        start + actualMarker.length,
        start + actualMarker.length
      );
    }
  };

  // Event handlers using the generic functions
  const boldText = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    wrapText("**");
  };

  const italicText = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    wrapText("_");
  };

  const blockquoteText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    formatLine("> ");
  };

  const checklistText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    formatLine("- [ ] ");
  };

  const unorderedListText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    formatLine("- ");
  };

  const orderedListText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    formatLine("1. ", (prevLine) => {
      const match = prevLine.match(/^(\d+)\. /);
      return match ? `${parseInt(match[1]) + 1}. ` : "1. ";
    });
  };

  const linkText = (e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (selectedText) {
      const newValue =
        textarea.value.substring(0, start) +
        `[${selectedText}](${selectedText})` +
        textarea.value.substring(end);
      textarea.value = newValue;
      textarea.focus();
      const urlStart = start + selectedText.length + 3;
      const urlEnd = urlStart + selectedText.length;
      textarea.setSelectionRange(urlStart, urlEnd);
    } else {
      const newValue =
        textarea.value.substring(0, start) +
        `[](url)` +
        textarea.value.substring(end);
      textarea.value = newValue;
      textarea.focus();
      textarea.setSelectionRange(start + 3, start + 6);
    }
  };

  // Generic Enter continuation handler
  const handleEnterContinuation = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const value = textarea.value;

    let lineStart = start;
    while (lineStart > 0 && value[lineStart - 1] !== "\n") {
      lineStart--;
    }

    const lineContent = value.substring(lineStart, start);

    const patterns = [
      { regex: /^- \[ \] /, continuation: "\n- [ ] " },
      { regex: /^- /, continuation: "\n- " },
      {
        regex: /^(\d+)\. /,
        continuation: (match: RegExpMatchArray) =>
          `\n${parseInt(match[1]) + 1}. `,
      },
    ];

    for (const pattern of patterns) {
      const match = lineContent.match(pattern.regex);
      if (match) {
        e.preventDefault();
        const continuation =
          typeof pattern.continuation === "function"
            ? pattern.continuation(match)
            : pattern.continuation;
        const newValue =
          value.substring(0, start) + continuation + value.substring(start);
        textarea.value = newValue;
        textarea.setSelectionRange(
          start + continuation.length,
          start + continuation.length
        );
        return;
      }
    }
  };

  return (
    <div className="border-1 border-zinc-200 rounded-md">
      <div className="flex justify-between items-center border-b-1 border-zinc-300">
        <div className="flex gap-2 font-mono text-xs px-3 py-2">
          <Button
            variant="ghost"
            className={`uppercase tracking-wider font-bold cursor-pointer rounded-md px-2 py-1
              ${
                editorMode === "write"
                  ? "bg-violet-500 text-white"
                  : "text-zinc-400"
              }`}
            role="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setEditorMode("write");
            }}
          >
            Write
          </Button>
          <Button
            variant="ghost"
            className={`uppercase tracking-wider font-bold cursor-pointer rounded-md px-2 py-1
              ${
                editorMode === "preview"
                  ? "bg-violet-500 text-white"
                  : "text-zinc-400"
              }`}
            role="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setEditorMode("preview");
            }}
          >
            Preview
          </Button>
        </div>

        {editorMode === "write" && (
          <div className="flex items-center gap-1 py-2 px-3">
            <Button role="button" variant="ghost" onClick={(e) => boldText(e)}>
              <BoldIcon className="size-4" />
            </Button>
            <Button
              role="button"
              variant="ghost"
              onClick={(e) => italicText(e)}
            >
              <ItalicIcon className="size-4" />
            </Button>
            <Button variant="ghost" onClick={(e) => checklistText(e)}>
              <ListChecks className="size-4" />
            </Button>
            <Button variant="ghost" onClick={(e) => unorderedListText(e)}>
              <ListIcon className="size-4" />
            </Button>
            <Button variant="ghost" onClick={(e) => orderedListText(e)}>
              <ListOrderedIcon className="size-4" />
            </Button>
            <Button variant="ghost" onClick={(e) => blockquoteText(e)}>
              <TextQuoteIcon className="size-4" />
            </Button>
            <Button variant="ghost" onClick={(e) => linkText(e)}>
              <LinkIcon className="size-4" />
            </Button>
          </div>
        )}
      </div>
      {editorMode === "write" ? (
        <>
          <div className="p-3 border-b-1 border-zinc-300">
            <Textarea
              onChange={(e) => setMarkdown(e.target.value)}
              defaultValue={markdown}
              ref={textareaRef}
              id={id}
              className={`${
                isDragging ? "border-violet-500 border-2 border-dashed" : ""
              } ${className}`}
              placeholder="Use Markdown to format"
              onKeyDown={(e) => {
                if (e.metaKey && e.key === "b") boldText(e);
                if (e.metaKey && e.key === "i") italicText(e);
                if (e.key === "Enter") handleEnterContinuation(e);
              }}
              onDrop={() => console.log("dropping")}
              onDragOver={() => setIsDragging(true)}
              onDragLeave={() => setIsDragging(false)}
            />
          </div>
          <div className="p-1">
            <Button
              className="text-xs text-zinc-500 flex items-center gap-2"
              variant="ghost"
              role="button"
            >
              <Paperclip className="size-4" />
              Paste, drop, or click to add files
            </Button>
          </div>
        </>
      ) : (
        <div
          className="editor-preview p-5"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      )}
    </div>
  );
};

export { Editor };
