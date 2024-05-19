import { createContext, useState, ReactNode } from "react";
import { UserConnected } from "../../types/types";
// component that uses the useState hook to manage the user state and provides 
// this state to its children components through the AuthContext.Provider.

const userData: string | null = localStorage.getItem("user");
const initialState = {
  user: userData ? JSON.parse(userData) : null,
};

export const AuthContext = createContext({
  state: initialState,
  // keep this "unused var" otherwise error when setUser is called
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (user: UserConnected | null ) => {},
});

const AuthProvider = ({ children } : { children: ReactNode}) => {
  const [user, setUser] = useState(initialState.user);

  return (
    <AuthContext.Provider value={{ state: { user }, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
