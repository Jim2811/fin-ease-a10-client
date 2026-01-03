import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "../Hooks/useAuth";

const instance = axios.create({
  baseURL: "https://fin-ease-server-iota.vercel.app/",
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    const interceptor = instance.interceptors.request.use((config) => {
      if (user) {
        const token = user?.accessToken
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user]);
  return instance;
};

export default useAxiosSecure;
