import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [isOpenLeftbar, setIsOpenLeftbar] = useState(false);

  const login = async (inputs) => {
    const { data } = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        // чтобы избежать ошибки cookie
        withCredentials: true,
      }
    );
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        isOpenLeftbar,
        setIsOpenLeftbar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
