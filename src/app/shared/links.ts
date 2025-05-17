import { defineLinks } from "rwsdk/router";

export const link = defineLinks([
  "/",
  "/protected",
  "/suggest/dashboard",
  "/suggest/new",
  "/suggest/settings",
  "/suggest/:id" /* individual idea */,
]);
