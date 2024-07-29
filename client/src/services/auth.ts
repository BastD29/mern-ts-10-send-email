// import { UserType } from "../models/user";
// import { ApiResponseType, fetcher } from ".";

// type RegisterParamsType = {
//   name: string;
//   email: string;
//   password: string;
// };

// type LoginParamsType = {
//   email: string;
//   password: string;
// };

// type RegisterResponseType = {
//   message: string;
//   user: UserType;
// };

// type LoginResponseType = {
//   message: string;
//   user: Omit<UserType, "name">;
// };

// type LogoutResponseType = {
//   message: string;
// };

// type ResponseType = {
//   user: UserType;
// };

// const register = async (
//   body: RegisterParamsType
// ): Promise<ApiResponseType<RegisterResponseType>> =>
//   fetcher({
//     method: "post",
//     url: REGISTER,
//     body: { name: body.name, email: body.email, password: body.password },
//   });

// const login = async (
//   body: LoginParamsType
// ): Promise<ApiResponseType<LoginResponseType>> =>
//   fetcher({
//     method: "post",
//     url: LOGIN,
//     body: { email: body.email, password: body.password },
//   });

// const logout = async (): Promise<ApiResponseType<LogoutResponseType>> =>
//   fetcher({
//     method: "post",
//     url: LOGOUT,
//   });

// const getProfile = async (): Promise<ApiResponseType<ResponseType>> =>
//   fetcher({
//     method: "get",
//     url: PROFILE,
//   });

// export { register, login, logout, getProfile };
// export type { RegisterParamsType, LoginParamsType };
