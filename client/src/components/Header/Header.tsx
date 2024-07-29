// import { FC } from "react";
// import { NavLink } from "react-router-dom";
// import style from "./Header.module.scss";

// type HeaderProps = {
//   layout: "auth" | "dashboard";
// };

// const Header: FC<HeaderProps> = ({ layout }) => {
//   const handleLogout = async () => {};

//   return (
//     <header className={style["header"]}>
//       {layout === "auth" ? (
//         <nav className={style["header__nav"]}>
//           <NavLink
//             to="/auth/signin"
//             className={({ isActive }) => (isActive ? style["active"] : "")}
//           >
//             Sign in
//           </NavLink>
//           <NavLink
//             to="/auth/signup"
//             className={({ isActive }) => (isActive ? style["active"] : "")}
//           >
//             Sign up
//           </NavLink>
//         </nav>
//       ) : (
//         <div className={style["header__profile"]}>
//           <p>Welcome, xxx</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
