import { SET_USER } from "../constants/actions";

type UserType = {
  email: string;
  name: string;
  password: string;
};

type SetUserActionType = {
  type: typeof SET_USER;
  payload: UserType;
};

export type { UserType, SetUserActionType };
