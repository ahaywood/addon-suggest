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
import { useRef, useState } from "react";

const Editor = ({ id, className = "" }: { id: string; className?: string }) => {
  const [isDragging, setIsDragging] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const boldText = (e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    // if there is selected text within the textarea, wrap it with ** ** for markdown, bold
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);

      if (selectedText) {
        const newValue =
          textarea.value.substring(0, start) +
          `**${selectedText}**` +
          textarea.value.substring(end);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 2, end + 2);
      } else {
        // if there's no selected text, add ** ** where the cursor is or the end of the line
        const newValue =
          textarea.value.substring(0, start) +
          `****` +
          textarea.value.substring(end);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }
    }
  };

  const italicText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    // if there is selected text within the textarea, wrap it with ** ** for markdown, bold
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);

      if (selectedText) {
        const newValue =
          textarea.value.substring(0, start) +
          `_${selectedText}_` +
          textarea.value.substring(end);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 2, end + 2);
      } else {
        // if there's no selected text, add _ _ where the cursor is or the end of the line
        const newValue =
          textarea.value.substring(0, start) +
          `__` +
          textarea.value.substring(end);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }
    }
  };

  const blockquoteText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();

    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const value = textarea.value;

      // Find the beginning of the current line
      let lineStart = start;
      while (lineStart > 0 && value[lineStart - 1] !== "\n") {
        lineStart--;
      }

      // Check if line already starts with '> '
      const lineContent = value.substring(lineStart);
      if (lineContent.startsWith("> ")) {
        // Remove the blockquote
        const newValue =
          value.substring(0, lineStart) +
          lineContent.substring(2) +
          value.substring(lineStart + lineContent.length);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start - 2, start - 2);
      } else {
        // Add the blockquote
        const newValue =
          value.substring(0, lineStart) + "> " + value.substring(lineStart);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }
    }
  };

  const linkText = (e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    const textarea = textareaRef.current;
    if (textarea) {
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
        // Select the URL inside the parentheses
        const urlStart = start + selectedText.length + 3; // after [text](
        const urlEnd = urlStart + selectedText.length;
        textarea.setSelectionRange(urlStart, urlEnd);
      } else {
        const newValue =
          textarea.value.substring(0, start) +
          `[](url)` +
          textarea.value.substring(end);
        textarea.value = newValue;
        textarea.focus();
        // Select "url" inside parentheses
        textarea.setSelectionRange(start + 3, start + 6);
      }
    }
  };

  const orderedListText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();

    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const value = textarea.value;

      // Find the beginning of the current line
      let lineStart = start;
      while (lineStart > 0 && value[lineStart - 1] !== "\n") {
        lineStart--;
      }

      const lineContent = value.substring(lineStart);
      const orderPattern = /^(\d+)\. /;
      const match = lineContent.match(orderPattern);

      if (match) {
        // Remove the ordered list marker
        const newValue =
          value.substring(0, lineStart) +
          lineContent.substring(match[0].length) +
          value.substring(lineStart + lineContent.length);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(
          start - match[0].length,
          start - match[0].length
        );
      } else {
        // Add ordered list marker - find what number to use
        let nextNumber = 1;

        // Look at previous line to see if it has a number
        if (lineStart > 0) {
          let prevLineStart = lineStart - 2; // Skip the \n
          while (prevLineStart > 0 && value[prevLineStart - 1] !== "\n") {
            prevLineStart--;
          }
          const prevLineContent = value.substring(prevLineStart, lineStart - 1);
          const prevMatch = prevLineContent.match(orderPattern);
          if (prevMatch) {
            nextNumber = parseInt(prevMatch[1]) + 1;
          }
        }

        const newValue =
          value.substring(0, lineStart) +
          `${nextNumber}. ` +
          value.substring(lineStart);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(
          start + `${nextNumber}. `.length,
          start + `${nextNumber}. `.length
        );
      }
    }
  };

  const checklistText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();

    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const value = textarea.value;

      // Find the beginning of the current line
      let lineStart = start;
      while (lineStart > 0 && value[lineStart - 1] !== "\n") {
        lineStart--;
      }

      // Check if line already starts with '> '
      const lineContent = value.substring(lineStart);
      if (lineContent.startsWith(" [ ] ")) {
        // Remove the blockquote
        const newValue =
          value.substring(0, lineStart) +
          lineContent.substring(2) +
          value.substring(lineStart + lineContent.length);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start - 2, start - 2);
      } else {
        // Add the blockquote
        const newValue =
          value.substring(0, lineStart) + "- [ ] " + value.substring(lineStart);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 6, start + 6);
      }
    }
  };

  const unorderedListText = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();

    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const value = textarea.value;

      // Find the beginning of the current line
      let lineStart = start;
      while (lineStart > 0 && value[lineStart - 1] !== "\n") {
        lineStart--;
      }

      // Check if line already starts with '> '
      const lineContent = value.substring(lineStart);
      if (lineContent.startsWith("- ")) {
        // Remove the blockquote
        const newValue =
          value.substring(0, lineStart) +
          lineContent.substring(2) +
          value.substring(lineStart + lineContent.length);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start - 2, start - 2);
      } else {
        // Add the blockquote
        const newValue =
          value.substring(0, lineStart) + "- " + value.substring(lineStart);
        textarea.value = newValue;
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }
    }
  };

  return (
    <div className="border-1 border-zinc-200 rounded-md">
      <div className="flex justify-between items-center border-b-1 border-zinc-300">
        <div className="flex gap-2 font-mono text-xs px-3 py-2">
          <Button
            variant="ghost"
            className="uppercase tracking-wider font-bold cursor-pointer bg-violet-500 text-white rounded-md px-2 py-1"
          >
            Write
          </Button>
          <Button
            variant="ghost"
            className="uppercase tracking-wider font-bold cursor-pointer text-zinc-400"
          >
            Preview
          </Button>
        </div>

        <div className="flex items-center gap-1 py-2 px-3">
          <Button role="button" variant="ghost" onClick={(e) => boldText(e)}>
            <BoldIcon className="size-4" />
          </Button>
          <Button role="button" variant="ghost" onClick={(e) => italicText(e)}>
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
      </div>
      <div className="p-3 border-b-1 border-zinc-300">
        <Textarea
          ref={textareaRef}
          id={id}
          className={`${
            isDragging ? "border-violet-500 border-2 border-dashed" : ""
          } ${className}`}
          placeholder="Use Markdown to format"
          onKeyDown={(e) => {
            // Cmd + B for bold
            if (e.metaKey && e.key === "b") {
              boldText(e);
            }
            // Cmd + I for Italic
            if (e.metaKey && e.key === "i") {
              italicText(e);
            }
            // Handle Enter for checklist continuation
            if (e.key === "Enter") {
              const textarea = e.currentTarget;
              const start = textarea.selectionStart;
              const value = textarea.value;

              // Find the beginning of the current line
              let lineStart = start;
              while (lineStart > 0 && value[lineStart - 1] !== "\n") {
                lineStart--;
              }

              // Get the content from line start to cursor position
              const lineContent = value.substring(lineStart, start);

              if (lineContent.startsWith("- [ ] ")) {
                e.preventDefault();
                const newValue =
                  value.substring(0, start) +
                  "\n- [ ] " +
                  value.substring(start);
                textarea.value = newValue;
                textarea.setSelectionRange(start + 7, start + 7);
              } else if (lineContent.startsWith("- ")) {
                e.preventDefault();
                const newValue =
                  value.substring(0, start) + "\n- " + value.substring(start);
                textarea.value = newValue;
                textarea.setSelectionRange(start + 3, start + 3);
              } else if (/^\d+\. /.test(lineContent)) {
                e.preventDefault();
                const match = lineContent.match(/^(\d+)\. /);
                const nextNumber = parseInt(match[1]) + 1;
                const newValue =
                  value.substring(0, start) +
                  `\n${nextNumber}. ` +
                  value.substring(start);
                textarea.value = newValue;
                textarea.setSelectionRange(
                  start + `\n${nextNumber}. `.length,
                  start + `\n${nextNumber}. `.length
                );
              }
            }
          }}
          onDrop={() => {
            console.log("dropping");
          }}
          onDragOver={() => {
            setIsDragging(true);
          }}
          onDragLeave={() => {
            setIsDragging(false);
          }}
        />
      </div>
      <div className="p-1">
        <Button
          className="text-xs text-zinc-500 flex items-center gap-2"
          variant="ghost"
        >
          <Paperclip className="size-4" />
          Paste, drop, or click to add files
        </Button>
      </div>
    </div>
  );
};

export { Editor };
