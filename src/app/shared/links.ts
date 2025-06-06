import { defineLinks } from "rwsdk/router";

export const link = defineLinks([
  "/",
  "/protected",
  "/suggest/dashboard",
  "/suggest/new",
  "/suggest/settings",
  "/suggest/users",
  "/suggest/account",
  "/suggest/user/:id",
  "/suggest/:id" /* individual idea */,
  "/suggest/board/:id",
  "/logout",
]);
