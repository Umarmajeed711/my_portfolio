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
      {loading ? <div>...loading</div> : <Myroutes />}
    </div>
  );
};

export default App;
