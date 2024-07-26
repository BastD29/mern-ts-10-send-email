import { RouteObject } from "react-router-dom";
import {
  DashboardLayout,
  Home,
  AuthLayout,
  NotFound,
  SignIn,
  SignUp,
} from "./routes";

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
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
