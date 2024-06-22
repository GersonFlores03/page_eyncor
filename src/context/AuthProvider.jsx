import React, { createContext, useContext, useEffect, useState } from 'react';
import { registerUser, loginUser, verifyTokenRequest } from '../api/auth';
import Cookies from "js-cookie";


const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading ,  setLoading] = useState(true)
  const [error, setError] = useState([])



  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  

  const registro = async (user) => {
    try {
      const res = await registerUser(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError(error.response.data.message);
      
    }
  };


  const login = async (user) => {
    try {
      const res = await loginUser(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);



  return (
    <AuthContext.Provider
      value={{
        registro,
        login,
        error,
        isAuthenticated,
        loading
      }}

    >
      {children}


    </AuthContext.Provider>
  );
};

export default AuthProvider;