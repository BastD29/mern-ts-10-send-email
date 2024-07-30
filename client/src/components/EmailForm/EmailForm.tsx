import { ChangeEvent, FC, FormEvent, useState } from "react";
import { sendEmail } from "../../services/email";
import { toast } from "react-toastify";
import style from "./EmailForm.module.scss";

export type ParamsType = {
  email: string;
};

const formInitialValues: ParamsType = {
  email: "",
};

const EmailForm: FC = () => {
  const [formData, setFormData] = useState(formInitialValues);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await sendEmail(formData);
      //   console.log("data:", data);
      toast.success(data?.message || "Email sending success");
    } catch (error) {
      console.error("Error sending email", error);
      toast.error((error as Error).message || "Email sending error");
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
    <form onSubmit={handleSubmit} className={style["email-form"]}>
      <p>Please insert email to subscribe to newsletter</p>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
