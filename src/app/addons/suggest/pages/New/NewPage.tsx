"use client";

import React from "react";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Checkbox } from "@/app/components/ui/checkbox";
import { link } from "@/app/shared/links";
import { Switch } from "@/app/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { Editor } from "../../components/Editor";
import {
  SelectContent,
  SelectValue,
  SelectItem,
  SelectTrigger,
  Select,
} from "@/app/components/ui/select";
import { MultiSelectCombobox } from "../../components/MultiSelectCombobox";
import { Combobox } from "../../components/Combobox";

export const NewPage = () => {
  return (
    <>
      <Button variant="ghost" className="absolute top-3 left-3" asChild>
        <a href={link("/suggest/dashboard")}>
          <ArrowLeft />
          Back
        </a>
      </Button>
      <header className="flex items-center gap-5">
        <Avatar className="size-[70px]">
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="page-title">Add a New Idea</h1>
          <p className="page-description">
            Share your content ideas with your audience and get feedback.
          </p>
        </div>
      </header>

      <div className="pl-[90px]">
        <Separator className="mb-10" />

        <form
          action=""
          className="grid grid-cols-[3fr_300px] gap-x-[100px] w-full gap-y-5"
        >
          <section className="flex flex-col gap-y-6">
            <div className="field">
              <Label htmlFor="title">Title</Label>
              <Input id="title" type="text" />
            </div>

            <div className="field">
              <Label htmlFor="content">Content</Label>
              <Editor id="content" className="h-[350px]" />
            </div>

            <div className="field grid-cols-[auto_auto_auto] justify-end w-full !gap-x-4">
              <div className="flex items-center gap-2">
                <Checkbox id="more" name="more" />
                <Label htmlFor="more">Create more</Label>
              </div>
              <Button
                type="button"
                variant="secondary"
                className="font-bold max-w-[150px]"
                asChild
              >
                <a href={link("/suggest/dashboard")}>Cancel</a>
              </Button>
              <Button type="submit" className="font-bold max-w-[150px]">
                Submit
              </Button>
            </div>
          </section>

          <aside className="border-l pl-[30px]">
            <section>
              <div className="flex justify-between items-center">
                <MultiSelectCombobox
                  label="Status"
                  placeholder="Select a status"
                  notFoundMessage="No status found"
                  emptyMessage="No Status"
                  data={[
                    {
                      value: "next.js",
                      label: "Next.js",
                    },
                    {
                      value: "sveltekit",
                      label: "SvelteKit",
                    },
                    {
                      value: "nuxt.js",
                      label: "Nuxt.js",
                    },
                    {
                      value: "remix",
                      label: "Remix",
                    },
                    {
                      value: "astro",
                      label: "Astro",
                    },
                  ]}
                />
              </div>
            </section>

            <Separator className="separator" />

            <section>
              <Combobox
                label="Board"
                placeholder="Select a board"
                notFoundMessage="No board found"
                emptyMessage="No Board"
                data={[
                  {
                    value: "next.js",
                    label: "Next.js",
                  },
                  {
                    value: "sveltekit",
                    label: "SvelteKit",
                  },
                  {
                    value: "nuxt.js",
                    label: "Nuxt.js",
                  },
                  {
                    value: "remix",
                    label: "Remix",
                  },
                  {
                    value: "astro",
                    label: "Astro",
                  },
                ]}
              />
            </section>

            <Separator className="separator" />

            <section>
              <MultiSelectCombobox
                label="Tags"
                placeholder="Select a tag"
                notFoundMessage="No tag found"
                emptyMessage="No Tag"
                data={[
                  {
                    value: "hero",
                    label: "Hero",
                  },
                  {
                    value: "helper",
                    label: "Helper",
                  },
                ]}
              />
            </section>

            <Separator className="separator" />

            <section>
              <Combobox
                label="Type"
                placeholder="Select a type"
                notFoundMessage="No type found"
                emptyMessage="No Type"
                data={[
                  {
                    value: "youtube",
                    label: "YouTube",
                  },
                  {
                    value: "tiktok",
                    label: "TikTok",
                  },
                  {
                    value: "instagram",
                    label: "Instagram",
                  },
                  {
                    value: "facebook",
                    label: "Facebook",
                  },
                ]}
              />
            </section>

            <Separator className="separator !mb-6" />

            <section>
              <div className="flex items-center gap-2">
                <Switch />
                <Label>Public?</Label>
              </div>
            </section>

            <section></section>
          </aside>
        </form>
      </div>
    </>
  );
};
