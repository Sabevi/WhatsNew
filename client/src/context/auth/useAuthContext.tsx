import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
// object that contains the user state and the setUser function that updates the user state.
// and allows the user state to be accessed by the children components.
// in a separate file for Fast Refresh to work correctly.

export const useStateValue = () => useContext(AuthContext);