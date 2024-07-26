import { FC, FormEvent } from "react";
import style from "./SignUp.module.scss";

const SignUp: FC = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={style["signup"]} onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
