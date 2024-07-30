import { ApiResponseType, fetcher } from ".";
import { ParamsType } from "../components/EmailForm/EmailForm";

type SendEmailResponseType = {
  message: string;
};

const sendEmail = (
  body: ParamsType
): Promise<ApiResponseType<SendEmailResponseType>> =>
  fetcher({
    method: "post",
    url: "/",
    body: { email: body.email },
  });

export { sendEmail };
