import React from "react";
import { createRoot } from "react-dom/client";

import { MainContent } from "@components/mainContent";

const Popup = () => {
  return (
    <MainContent />
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup/>
  </React.StrictMode>
);
