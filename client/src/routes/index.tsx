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
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
