import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("react-root")!).render(
  React.createElement(App)
);
