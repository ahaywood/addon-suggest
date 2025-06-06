"use client";

import { Button } from "@/app/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import { ContentTypeBlock } from "./ContentTypeBlock";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AddContentType } from "./AddContentType";
import { useLocalStorageState } from "../../../lib/hooks/useLocalStorageState";

const ManageContentTypes = () => {
  const [isOpen, setIsOpen] = useLocalStorageState(
    "manageContentTypes-isOpen",
    true
  );
  const [isAddWindowOpen, setIsAddWindowOpen] = useState(false);

  return (
    <section className="box p-5">
      <div className="flex justify-between gap-[100px]">
        <div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer hover:text-violet-500"
          >
            <h2 className="section-title flex items-center gap-x-1">
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} />
              </motion.div>
              Content Types
            </h2>
          </button>
          <p className="section-description">
            Define different types of feedback content with custom colors and
            descriptions.
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
            <Plus /> New Type
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
                    <AddContentType
                      closePanel={() => setIsAddWindowOpen(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <ContentTypeBlock />
              <ContentTypeBlock />
              <ContentTypeBlock />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export { ManageContentTypes };
