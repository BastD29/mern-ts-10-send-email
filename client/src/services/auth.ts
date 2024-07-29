import { LOGIN, LOGOUT, PROFILE, REGISTER } from "../constants/endpoints";
import { UserType } from "../models/user";
import { ApiResponseType, fetcher } from "./index2";

type RegisterParamsType = {
  name: string;
  email: string;
  password: string;
};

type LoginParamsType = {
  email: string;
  password: string;
};

type RegisterResponseType = {
  message: string;
  user: UserType;
};

type ResponseType = {
  user: UserType;
};

const register = async (
  body: RegisterParamsType
): Promise<ApiResponseType<RegisterResponseType>> =>
  fetcher({
    method: "post",
    url: REGISTER,
    body: { name: body.name, email: body.email, password: body.password },
  });

const login = async (body: LoginParamsType): Promise<ApiResponseType<any>> =>
  fetcher({
    method: "post",
    url: LOGIN,
    body: { email: body.email, password: body.password },
  });

const logout = async (): Promise<ApiResponseType<void>> =>
  fetcher({
    method: "get",
    url: LOGOUT,
  });

const getProfile = async (): Promise<ApiResponseType<ResponseType>> =>
  fetcher({
    method: "get",
    url: PROFILE,
  });

export { register, login, logout, getProfile };
export type { RegisterParamsType, LoginParamsType };
