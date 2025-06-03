import { index, route, layout } from "rwsdk/router";
import { DashboardPage } from "./DashboardPage";
import { NewPage } from "./NewPage";
import { IdeaPage } from "./IdeaPage";
import { SettingsPage } from "./SettingsPage";
import { Layout } from "./Layout";

const routes = layout(Layout, [
  index(
    () =>
      new Response(null, {
        status: 302,
        headers: {
          Location: "/suggest/dashboard",
        },
      })
  ),
  route("/dashboard", DashboardPage),
  route("/new", NewPage),
  route("/settings", SettingsPage),
  route("/:id", IdeaPage),
]);

export default routes;
