import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthState = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/auth/me`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setUser(data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        setToken(null);
        localStorage.removeItem("token");
        console.log(error.response?.data.error || error.message);
        setLoading(false);
      }
    };
    (token || isUserUpdated) && getUser();
  }, [token, isUserUpdated]);

  const registerUser = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/auth/signup`,
        formData
      );
      localStorage.setItem("token", token);
      setToken(token);
      setIsAuthenticated(true);
      setLoading(false);
      navigate("/auth/home", { replace: true });
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const loginUser = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/auth/signin`,
        formData
      );
      localStorage.setItem("token", token);
      setToken(token);
      setIsAuthenticated(true);
      setLoading(false);
      navigate("/auth/home", { replace: true });
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const updateUser = async (formData) => {
    try {
      setLoading(true);
      await axios.put(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/auth/update`,
        formData
      );
      setLoading(false);
      setIsUserUpdated(true);
      navigate("/auth/home", { replace: true });
    } catch (error) {
      setIsUserUpdated(false);
      console.log(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated,
        registerUser,
        loginUser,
        updateUser,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
