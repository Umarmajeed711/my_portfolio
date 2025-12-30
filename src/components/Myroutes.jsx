import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/publicPages/Home";
import Portfolio from "../pages/publicPages/Portfolio";
import About from "../pages/publicPages/About";
import { Contact } from "../pages/publicPages/Contact";
import Login from "../pages/publicPages/login";
import ForgetPassword from "../pages/publicPages/ForgetPassword";
import Dashboard from "../pages/privatePages/dashboard";
import { GlobalContext } from "../context/Context";

export const Myroutes = () => {
  let { state, dispatch } = useContext(GlobalContext);

  let isLogin = state?.isLogin;

  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* NOT LOGGED IN */}
        {/* {!isLogin && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={isLogin ? <Dashboard /> : <Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/"  />}></Route>
          </>
        )} */}

        {/* LOGGED IN */}
        {/* {isLogin && (
          <>
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard"  replace/>} />
          </>
        )} */}

        <Route
          path="/login"
          element={isLogin ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={isLogin ? <Dashboard /> : <Navigate to="/login" replace />}
        />

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            isLogin ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};
