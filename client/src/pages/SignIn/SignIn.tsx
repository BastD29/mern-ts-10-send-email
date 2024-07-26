import { FC, FormEvent } from "react";
import style from "./SignIn.module.scss";

const handleSubmit = async (event: FormEvent) => {
  event.preventDefault();
};

const SignIn: FC = () => {
  return (
    <form className={style["signin"]} onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
