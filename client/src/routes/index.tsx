import { RouteObject } from "react-router-dom";
import { DashboardLayout, Home, AuthLayout, NotFound } from "./routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
