import { ChangeEvent, FC, FormEvent, useState } from "react";
import { LoginParamsType, login } from "../../services/auth";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./SignIn.module.scss";

const formInitialValues: LoginParamsType = {
  email: "",
  password: "",
};

const SignIn: FC = () => {
  const [formData, setFormData] = useState(formInitialValues);
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("formData:", formData);

    try {
      const { data } = await login(formData);
      console.log("data:", data);
      console.log("user:", data?.user);

      if (data?.user) {
        setUser(data?.user);
        toast.success(data.message || "Login successful");
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging user", error);
      const errorMessage = (error as Error).message || "Error logging user";
      toast.error(errorMessage);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={style["signin"]} onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
