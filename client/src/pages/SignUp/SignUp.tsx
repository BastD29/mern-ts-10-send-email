import { ChangeEvent, FC, FormEvent, useState } from "react";
import { RegisterParamsType, register } from "../../services/auth";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import style from "./SignUp.module.scss";

const formInitialValues: RegisterParamsType = {
  name: "",
  email: "",
  password: "",
};

const SignUp: FC = () => {
  const [formData, setFormData] = useState(formInitialValues);
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await register(formData);
      console.log("user:", data?.user);

      if (data?.user) {
        setUser(data?.user);
        toast.success(data.message || "Registration successful");
        navigate("/");
      }
    } catch (error) {
      console.error("Error registering user", error);
      const errorMessage = (error as Error).message || "Error registering user";
      toast.error(errorMessage);
      // setError("Error");
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
    <form className={style["signup"]} onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
