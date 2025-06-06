import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { X } from "lucide-react";

const AddBoard = ({ closePanel }: { closePanel: () => void }) => {
  return (
    <div className="box p-5 relative">
      <Button
        onClick={closePanel}
        className="absolute right-1 top-1"
        variant="ghost"
      >
        <X />
      </Button>
      <h3 className="text-lg font-bold mb-5">Add New Board</h3>
      <form className="flex gap-5 items-end">
        <div className="field">
          <Label htmlFor="board-name">Board Name</Label>
          <Input placeholder="Board Name" />
        </div>

        <div className="field">
          <Label htmlFor="board-description">Board Description</Label>
          <Input placeholder="Board Description" />
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

export { AddBoard };
