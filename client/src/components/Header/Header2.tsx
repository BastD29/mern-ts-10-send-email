import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { logout } from "../../services/auth";
import { toast } from "react-toastify";
import style from "./Header.module.scss";

const Header: FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();
  console.log("user:", user);

  const handleLogout = async () => {
    try {
      const { data } = await logout();
      setUser(null);
      toast.success(data?.message);
      navigate("/auth/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      const errorMessage = (error as Error).message || "Logout failed";
      toast.error(errorMessage);
    }
  };

  return (
    <header className={style["header"]}>
      {user ? (
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
      )}
    </header>
  );
};

export default Header;
