import React from "react";
import Button from "../components/button/Button";

const Login = () => {
  return (
    <div className="bg bg-[url('/bg.png')] bg-cover bg-center bg-[#FF6767] min-h-screen flex justify-center items-center px-5 py-2">
      <div className="login-wrapper bg-white rounded-lg p-10 w-auto shadow-lg">
        <div className="login-main flex mt-20 justify-between gap-5 items-center">
          <div className="login-left">
            <h1 className="font-bold text-4xl">Sign In</h1>
            <div className="login-input mt-5">
              <div className="username-input border-1 rounded-lg shadow-lg">
                <i className="fa-solid fa-user ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                />
              </div>
              <div className="password-input mt-4 border-1 rounded-lg shadow-lg">
                <i className="fa-solid fa-lock ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="login-rememberme mt-4">
                <input className="mr-5" id="rem" type="checkbox" name="rem" />
                <label htmlFor="rem">Remember me</label>
              </div>
              <div className="login-btn mt-4">
                <Button
                  btnName={"Login"}
                  btnCss={"bg-red-200 rounded pt-3 pb-3 pl-7 pr-7 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"}
                />
              </div>
              <div className="login-other mt-10">
                <div className="login-fast flex gap-2 items-center">
                  <p>Or, Log in with</p>
                  <a href="#"><i className="fa-brands fa-facebook text-xl" style={{color: "#0091ff"}}></i></a>
                  <a href="#"><i className="fa-brands fa-google text-xl" style={{color: "#ff0000"}}></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter text-xl"></i></a>
                </div>
                <p>
                  Don't have one, <a className="text-blue-700" href="#">Create Now!</a>
                </p>
              </div>
            </div>
          </div>
          <div className="login-right">
            <img src="/sideimg.png" width={500}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
