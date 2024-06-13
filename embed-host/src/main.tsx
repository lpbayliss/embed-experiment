import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartRoute from "./routes/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>404 - Not Found</p>,
  },
  {
    path: "/cart",
    element: <CartRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
