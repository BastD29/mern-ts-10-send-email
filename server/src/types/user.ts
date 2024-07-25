// type UserType = {
//   id: number;
//   email: string;
//   name: string;
//   password: string;
// };

import { Document } from "mongoose";

type UserType = Document & {
  email: string;
  name: string;
  password: string;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
};

export type { UserType };
