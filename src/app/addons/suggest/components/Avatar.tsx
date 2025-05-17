"use client";

import {
  Avatar as AvatarWrapper,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>A</AvatarFallback>
    </AvatarWrapper>
  );
};
