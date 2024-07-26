import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Header from "../../Header/Header";
import style from "./AuthLayout.module.scss";

const AuthLayout: FC = () => {
  return (
    <div className={style["auth-layout"]}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
