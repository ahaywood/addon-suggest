import React from "react";
import { UserBlock } from "./UserBlock";

export const UserList = () => {
  return (
    <div className="flex flex-col gap-3">
      <UserBlock />
      <UserBlock />
      <UserBlock />
    </div>
  );
};
