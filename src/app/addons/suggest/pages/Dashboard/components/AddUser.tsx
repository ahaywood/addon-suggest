"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        role="button"
        className="font-bold uppercase tracking-wider text-sm font-mono flex items-center gap-2 mr-3 absolute right-0 top-0"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        <Plus className="size-4" /> USER
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="box p-5 relative mb-5">
              <Button
                className="absolute right-1 top-1"
                variant="ghost"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
              <h3 className="text-lg font-bold mb-5">Add New Board</h3>
              <form className="flex gap-5 items-end">
                <div className="field">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input placeholder="First Name" id="firstName" />
                </div>
                <div className="field">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input placeholder="Last Name" id="lastName" />
                </div>
                <div className="field">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Email" id="email" />
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { AddUser };
