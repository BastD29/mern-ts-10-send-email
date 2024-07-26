import { FC, ReactNode, /* useEffect, */ useState } from "react";
// import { getProfile } from "../../services/auth";
import { AuthContext } from "./AuthContext";
import { UserType } from "../../models/user";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       try {
  //         const { data: user } = await getProfile();
  //         if (user) {
  //           setUser(user);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching profile", error);
  //       }
  //     };

  //     fetchProfile();
  //   }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
