import { route } from "rwsdk/router";
import { DashboardPage } from "./DashboardPage";
import { NewPage } from "./NewPage";
import { IdeaPage } from "./IdeaPage";
import { SettingsPage } from "./SettingsPage";

const routes = [
  route("/dashboard", DashboardPage),
  route("/new", NewPage),
  route("/settings", SettingsPage),
  route("/:id", IdeaPage),
];

export default routes;
