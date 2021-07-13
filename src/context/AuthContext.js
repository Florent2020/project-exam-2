import React from "react";
import useLocalStorage from "../hooks/UseLocalStorage";
// import { useState } from "react";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);
  //   const [darkMode, setDarkMode] = useState(false);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
