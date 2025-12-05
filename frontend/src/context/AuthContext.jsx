import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //to hold user authentication
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return JSON.parse(storedUser) || null;
  });

  //to hold access token

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || null;
  });

  const login = useCallback((response) => {
    setAccessToken(response.accessToken);
    setUser(response.user);
  }, []);

  const logout = useCallback(() => {
    setAccessToken(null);
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
      accessToken,
    }),
    [user, login, logout, accessToken]
  );

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
