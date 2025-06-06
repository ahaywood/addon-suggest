"use client";

import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Monitor } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const ThemePicker = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    if (theme === "system") {
      document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {theme === "system" ? (
          <Monitor />
        ) : theme === "light" ? (
          <Sun />
        ) : (
          <Moon />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            console.log("light");
            localStorage.theme = "light";
            setTheme("light");
          }}
        >
          <Sun /> Light Mode
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log("dark");
            localStorage.theme = "dark";
            setTheme("dark");
          }}
        >
          <Moon /> Dark Mode
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log("system");
            localStorage.removeItem("theme");
            setTheme("system");
          }}
        >
          <Monitor /> System Default
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemePicker };
