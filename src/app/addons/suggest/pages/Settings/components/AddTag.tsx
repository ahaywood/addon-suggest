"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RefreshCw, X } from "lucide-react";
import React from "react";
import { tagColors } from "../../../lib/tagColors";

const AddTag = ({ closePanel }: { closePanel: () => void }) => {
  return (
    <div className="box p-5 relative">
      <Button
        className="absolute right-1 top-1"
        variant="ghost"
        onClick={closePanel}
      >
        <X />
      </Button>
      <h3 className="text-lg font-bold mb-5">Add Tag</h3>
      <form className="flex gap-5 items-end">
        <div className="field flex-0">
          <Label>Color</Label>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              type="button"
              className="text-white"
              style={{ backgroundColor: tagColors[0].hex }}
            >
              <RefreshCw />
            </Button>
            <Input
              name="color"
              className="w-[100px]"
              defaultValue={tagColors[0].hex}
            />
          </div>
        </div>

        <div className="field">
          <Label htmlFor="type-name">Type Name</Label>
          <Input placeholder="Type Name" />
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closePanel();
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export { AddTag };
