import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Guest/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

export default router