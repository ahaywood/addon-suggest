import { Button } from "@/app/components/ui/button";
import { link } from "@/app/shared/links";
import { ArrowLeft } from "lucide-react";
import React from "react";

const BackButton = () => {
  return (
    <Button variant="ghost" className="absolute top-3 left-3" asChild>
      <a href={link("/suggest/dashboard")}>
        <ArrowLeft />
        Back
      </a>
    </Button>
  );
};

export { BackButton };
