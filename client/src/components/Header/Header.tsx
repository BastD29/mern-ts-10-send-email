import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header: FC = () => {
  // const handleLogout = async () => {};

  return (
    <header className={style["header"]}>
      <nav className={style["header__nav"]}>
        <NavLink
          to="/auth/signin"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign in
        </NavLink>
        <NavLink
          to="/auth/signup"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign up
        </NavLink>
      </nav>

      {/* // * Appears only if logged in */}
      {/* <div className={style["header__profile"]}>
        <p>Welcome, xxx</p>
        <button onClick={handleLogout}>Logout</button>
      </div> */}
    </header>
  );
};

export default Header;
