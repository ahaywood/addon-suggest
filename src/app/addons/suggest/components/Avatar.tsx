"use client";

import {
  Avatar as AvatarWrapper,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

export const Avatar = ({ className }: { className?: string }) => {
  return (
    <AvatarWrapper className={className}>
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback>A</AvatarFallback>
    </AvatarWrapper>
  );
};
