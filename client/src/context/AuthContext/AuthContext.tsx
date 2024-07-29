import { Context, Dispatch, SetStateAction, createContext } from "react";
import { /* SetUserActionType, */ UserType } from "../../models/user";

type AuthContextType = {
  user: UserType | null;
  // setUser: Dispatch<SetStateAction<SetUserActionType>>;
  setUser: Dispatch<SetStateAction<UserType | Omit<UserType, "name"> | null>>;
};

export const AuthContext: Context<AuthContextType | undefined> = createContext<
  AuthContextType | undefined
>(undefined);
