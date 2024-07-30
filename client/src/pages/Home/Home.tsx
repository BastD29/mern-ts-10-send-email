import { FC } from "react";
import EmailForm from "../../components/EmailForm/EmailForm";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <EmailForm />
    </div>
  );
};

export default Home;
