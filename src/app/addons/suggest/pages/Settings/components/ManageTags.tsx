"use client";

import { ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import { TagBlock } from "./TagBlock";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { AddTag } from "./AddTag";
import { useLocalStorageState } from "../../../lib/hooks/useLocalStorageState";

const ManageTags = () => {
  const [isOpen, setIsOpen] = useLocalStorageState("manageTags-isOpen", true);
  const [isAddWindowOpen, setIsAddWindowOpen] = useState(false);

  return (
    <section className="box p-5">
      <div className="flex justify-between gap-[100px]">
        <div>
          <button
            className="cursor-pointer hover:text-violet-500"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <h2 className="section-title flex items-center gap-x-1">
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} />
              </motion.div>
              Tags
            </h2>
          </button>
          <p className="section-description">
            Organize feedback into different boards or categories. Users can
            submit feedback to specific boards.
          </p>
        </div>
        <div>
          <Button
            variant="secondary"
            role="button"
            onClick={() => {
              setIsOpen(true);
              setIsAddWindowOpen(true);
            }}
          >
            <Plus /> New Tag
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-3 pt-5">
              <AnimatePresence>
                {isAddWindowOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AddTag closePanel={() => setIsAddWindowOpen(false)} />
                  </motion.div>
                )}
              </AnimatePresence>
              <TagBlock />
              <TagBlock />
              <TagBlock />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export { ManageTags };
