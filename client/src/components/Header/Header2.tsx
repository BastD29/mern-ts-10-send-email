import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import style from "./Header.module.scss";

const Header: FC = () => {
  const { user } = useAuthContext();
  console.log("user:", user);

  const handleLogout = async () => {};

  return (
    <header className={style["header"]}>
      {/* {user ? (
        <div className={style["header__profile"]}>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
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
      )} */}
      {user && (
        <div className={style["header__profile"]}>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
