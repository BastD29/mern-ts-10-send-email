import { RouteObject } from "react-router-dom";
import { DashboardLayout, Home, AuthLayout, NotFound } from "./routes";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
