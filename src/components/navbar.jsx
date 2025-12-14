import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import api from "./api";
import { GlobalContext } from "../context/Context";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  let {state,dispatch} = useContext(GlobalContext);

  const showSideBar = () => {
    //  document.getElementById("hideSideBar").className = "closesideBar"
    setTimeout(() => {
      setShowNav(!showNav);
    }, 500);
  };

  const HideSideBar = () => {
    document.getElementById("hideSideBar").className = " closesideBar";
    setTimeout(() => {
      setShowNav(false);
    }, 500);
  };

   const logout = async () => {
    try {
      let user_logout = await api.get("/logout");
      console.log("user logout", user_logout);
      dispatch({ type: "USER_LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="sticky top-0 z-50 source">
      <nav className="nav px-2 md:px-8 lg:px-20 py-3">
        <div className={`logo ${showNav ? "opacity-0" : "opacity-1"} `}>
          <img src="./whitelogo.png" alt="logo" className="h-full w-full" />
        </div>

        <div className="hidden sm:block ">
          <ul className="nav-links">
            <li className="flex  items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active-nav" : "link"
                }
              >
                <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                home
              </NavLink>
            </li>
            <li className="flex  items-center">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "link active-nav" : "link"
                }
              >
                <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                portfolio
              </NavLink>
            </li>
            <li className="flex  items-center">
              <NavLink
                to="/about-me"
                className={({ isActive }) =>
                  isActive ? "link active-nav" : "link"
                }
              >
                <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                about-me
              </NavLink>
            </li>
            <li className="flex  items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link active-nav" : "link"
                }
              >
                <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                contact
              </NavLink>
              {/* <Link className="link" to="/contact">
                <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                contact
              </Link> */}
            </li>
            {
              state?.isLogin ? <button className="button p-1 ibm" onClick={logout}>Logout</button> : null
            }
          </ul>
        </div>

        <div className={`sm:hidden ${showNav ? "opacity-0" : "opacity-1"}`}>
          <p onClick={showSideBar}>
            {" "}
            {showNav ? <IoMdClose /> : <GiHamburgerMenu />}
          </p>
        </div>
      </nav>

      {showNav ? (
        <>
          <div className="sideLinks" id="hideSideBar">
            <div className="flex justify-between items-center px-3 py-3">
              <div className="logo !text-white">
                <img
                  src="./whitelogo.png"
                  alt="logo"
                  className="h-full w-full"
                />
              </div>

              <div className="sm:hidden !text-white">
                <p onClick={HideSideBar}>
                  {" "}
                  {showNav ? <IoMdClose /> : <GiHamburgerMenu />}
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-y-3">
              <li onClick={HideSideBar}>
                {/* <Link className="sidelink" to="/">
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  <span>home</span>
                </Link> */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "sidelink active-nav" : "sidelink"
                  }
                >
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  home
                </NavLink>
              </li>
              <li onClick={HideSideBar}>
                {/* <Link className="sidelink" to="/portfolio">
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  portfolio
                </Link>{" "} */}
                 <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "sidelink active-nav" : "sidelink"
                  }
                >
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  portfolio
                </NavLink>
              </li>
              <li onClick={HideSideBar}>
                {/* <Link className="sidelink" to="/about-me">
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  about-me
                </Link> */}
                 <NavLink
                  to="/about-me"
                  className={({ isActive }) =>
                    isActive ? "sidelink active-nav" : "sidelink"
                  }
                >
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  about-me
                </NavLink>
              </li>
              <li onClick={HideSideBar}>
                {/* <Link className="sidelink" to="/contact">
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  contact
                </Link> */}
                 <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "sidelink active-nav" : "sidelink"
                  }
                >
                  <span style={{ color: "#c778dd", fontSize: "22px" }}>#</span>
                  contact
                </NavLink>
              </li>
            </ul>

            <div className="flex gap-2 justify-center">
              <div>Logo1</div>
              <div>Logo1</div>
              <div>Logo1</div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Navbar;
