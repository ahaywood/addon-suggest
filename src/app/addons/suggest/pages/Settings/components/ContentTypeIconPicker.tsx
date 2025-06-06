"use client";

import { Button } from "@/app/components/ui/button";
import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandInput,
  Command,
} from "@/app/components/ui/command";
import { Popover, PopoverTrigger } from "@/app/components/ui/popover";
import { PopoverContent } from "@/app/components/ui/popover";
import {
  Bug,
  Pencil,
  Play,
  Smile,
  Twitch,
  Video,
  X,
  Linkedin,
  Sparkle,
  Youtube,
  Github,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const ContentTypeIconPicker = () => {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            <Pencil />
          </Button>
          {/* <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          > */}
          {/* {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."} */}
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="command-group-grid">
                <CommandItem>
                  <Pencil />
                </CommandItem>
                <CommandItem>
                  <Video />
                </CommandItem>
                <CommandItem>
                  <Twitter />
                </CommandItem>
                <CommandItem>
                  <Twitch />
                </CommandItem>
                <CommandItem>
                  <Linkedin />
                </CommandItem>
                <CommandItem>
                  <Bug />
                </CommandItem>
                <CommandItem>
                  <Sparkle />
                </CommandItem>
                <CommandItem>
                  <Github />
                </CommandItem>
                <CommandItem>
                  <Youtube />
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { ContentTypeIconPicker };
