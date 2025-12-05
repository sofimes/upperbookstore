import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const baseUrl = "http://localhost:5500/api";
console.log(baseUrl);

const api = axios.create({
  baseURL: `${baseUrl}`,
  withCredentials: true,
});

// to handle dynamic content-type

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken, "=> api token ");

    //seet authorized header
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    // set content-type header based on data type

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export const useAxiosInterceptor = () => {
  const navigate = useNavigate();
  const { user, logout, login } = useContext(AuthContext);
  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401) {
          const errorMessage = error.response.data.message;

          if (errorMessage === "Token required.") {
            logout();
          } else if (
            errorMessage === "Token expired." &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;

            try {
              const { data } = await api.get("/auth/refresh-token", {
                withCredentials: true,
              });
              login({ user, accessToken: data.accessToken });

              api.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${data.accessToken}`;

              return api(originalRequest);
            } catch (error) {
              console.error("Refresh token error: ", refreshError);

              navigate("/login");
              return Promise.reject(refreshError);
            }
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, login, logout, user]);
};

export const ApiComp = () => {
  useAxiosInterceptor();
  return null;
};

export const postApi = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const putApi = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data: ", error);
    throw error;
  }
};

export const getApi = async (endpoint, params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await api.get(`${endpoint}?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteApi = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
