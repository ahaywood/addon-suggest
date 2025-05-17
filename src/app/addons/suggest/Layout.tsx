import React from "react";
import { Avatar } from "./components/Avatar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-[100px]">
      <div className="absolute top-4 right-4">
        <Avatar />
      </div>
      {children}
    </main>
  );
};
