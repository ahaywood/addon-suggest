"use client";

import * as React from "react";
import { Check, Settings, X } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { Badge } from "@/app/components/ui/badge";
import { cn } from "@/app/lib/utils";

export function Combobox({
  data,
  label,
  placeholder = "",
  notFoundMessage = "", // this is displayed when the combobox search is empty
  emptyMessage = "", // this is displayed the combobox if it is empty
}: {
  data: {
    value: string;
    label: string;
  }[];
  label: string;
  placeholder?: string;
  notFoundMessage?: string;
  emptyMessage?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col gap-0 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="justify-between -mx-2 w-[calc(100%_+_8px)]"
          >
            {label}
            <Settings className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>{notFoundMessage}</CommandEmpty>
              <CommandGroup>
                {data &&
                  data.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === item.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="flex gap-2 flex-wrap">
        {value ? (
          data.find((i) => i.value === value) && (
            <Badge>
              {data.find((i) => i.value === value)?.label}
              <button
                role="button"
                onClick={() => {
                  setValue("");
                }}
              >
                <X className="size-4 cursor-pointer" />
              </button>
            </Badge>
          )
        ) : (
          <p className="text-sm text-muted-foreground">{emptyMessage}</p>
        )}
      </div>
    </div>
  );
}
