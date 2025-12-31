import React, { useContext, useEffect, useState } from "react";
import "./styles/main.scss";
import Navbar from "./components/navbar";
import Home from "./pages/publicPages/Home";
import { Myroutes } from "./components/Myroutes";
import { GlobalContext } from "./context/Context";
import axios from "axios";
import api from "./components/api";

const App = () => {
  let { state, dispatch } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const isAdminLogin = async () => {
    setLoading(true);

    try {
      let response = await api.get(`/user-detail`);
      dispatch({ type: "ADMIN_LOGIN", payload: response?.data.user });
    } catch (error) {
      dispatch({ type: "USER_LOGOUT" });
    } finally {
      setLoading(false);
      console.log("state", state?.isLogin);
    }
  };

  useEffect(() => {
    isAdminLogin();
  }, []);

  return (
    <div>
      {/* <Navbar/>
      <Home/> */}
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-theme-background">
          <div className="text-theme-primary font-mono text-lg animate-pulse">
            Initializing Portfolio
          </div>

          <div className="mt-4 w-16 h-1 bg-theme-secondary/20 rounded overflow-hidden">
            <div className="w-1/2 h-full bg-theme-primary animate-[loading_1.2s_infinite]"></div>
          </div>

          <p className="mt-4 text-xs text-theme-secondary tracking-widest uppercase">
            Muhammad Umar · MERN Stack
          </p>
        </div>
      ) : (
        <Myroutes />
      )}
    </div>
  );
};

export default App;
