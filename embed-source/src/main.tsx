import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WalletRoute from "./routes/wallet";

const router = createBrowserRouter([
  {
    path: "/wallet",
    element: <WalletRoute />,
  },
  {
    path: "/",
    element: <p>404 - Not Found</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
