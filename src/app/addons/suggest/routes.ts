import { index, route, layout } from "rwsdk/router";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { NewPage } from "./pages/New/NewPage";
import { IdeaPage } from "./pages/Ideas/IdeaPage";
import { SettingsPage } from "./pages/Settings/SettingsPage";
import { Layout } from "./pages/Layout";
import { UserListPage } from "./pages/User/UserListPage";
import { IndividualUserPage } from "./pages/User/IndividualUserPage";
import { BoardPage } from "./pages/Board/BoardPage";
import { AccountPage } from "./pages/Account/AccountPage";
import { EditPage } from "./pages/Edit/EditPage";

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
  route("/edit/:id", EditPage),
  route("/settings", SettingsPage),
  route("/board/:id", BoardPage),
  route("/users", UserListPage),
  route("/user/:id", IndividualUserPage),
  route("/account", AccountPage),
  route("/:id", IdeaPage),
  route("/logout", () => {
    return new Response(null, {
      status: 302,
      headers: { Location: "/login" },
    });
  }),
]);

export default routes;
