import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Header from "../../Header/Header";
import style from "./DashboardLayout.module.scss";

const DashboardLayout: FC = () => {
  return (
    <div className={style["dashboard-layout"]}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
