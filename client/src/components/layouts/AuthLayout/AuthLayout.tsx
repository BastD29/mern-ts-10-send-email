import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoaderLayout from "../LoaderLayout/LoaderLayout";
import Header from "../../Header/Header2";
import style from "./AuthLayout.module.scss";

const AuthLayout: FC = () => {
  return (
    <div className={style["auth-layout"]}>
      <Suspense fallback={<LoaderLayout />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
