import { FC, LazyExoticComponent, lazy } from "react";

export const DashboardLayout: LazyExoticComponent<FC> = lazy(
  () => import("../components/layouts/DashboardLayout/DashboardLayout")
);

export const AuthLayout: LazyExoticComponent<FC> = lazy(
  () => import("../components/layouts/AuthLayout/AuthLayout")
);

export const Home: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Home/Home")
);

export const NotFound: LazyExoticComponent<FC> = lazy(
  () => import("../pages/NotFound/NotFound")
);
