import React from "react";
import { BackButton } from "../../components/BackButton";
import { ManageBoards } from "./components/ManageBoards";
import { ManageContentTypes } from "./components/ManageContentTypes";
import { ManageTags } from "./components/ManageTags";
import { ManageNotifications } from "./components/ManageNotifications";

export const SettingsPage = () => {
  return (
    <div>
      <BackButton />

      <div className="mb-10">
        <h1 className="page-title">Settings</h1>
        <p className="page-description">Something Something</p>
      </div>

      <div className="flex flex-col gap-5">
        <ManageBoards />

        <ManageContentTypes />

        <ManageTags />

        <ManageNotifications />
      </div>
    </div>
  );
};
