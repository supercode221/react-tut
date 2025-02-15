import React from "react";
import Button from "../components/button/Button";

const Register = () => {
  return (
    <div className="bg bg-[url('/bg.png')] bg-cover bg-center bg-[#FF6767] min-h-screen flex justify-center items-center px-5 py-2">
      <div className="login-wrapper bg-white rounded-lg p-10 w-auto shadow-lg">
        <div className="login-main flex justify-between gap-10 items-center">
          <div className="login-left">
            <img src="/sideimg2.png" />
          </div>
          <div className="login-right">
            <h1 className="font-bold text-4xl">Sign Up</h1>
            <div className="login-input mt-5">
              <div className="fname-input border-1 rounded-lg shadow-lg mb-4">
                <i className="fa-solid fa-user ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="text"
                  name="fname"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="lname-input border-1 rounded-lg shadow-lg mb-4">
                <i className="fa-solid fa-user ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="text"
                  name="lname"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="username-input border-1 rounded-lg shadow-lg mb-4">
                <i className="fa-regular fa-user ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                />
              </div>
              <div className="email-input border-1 rounded-lg shadow-lg mb-4">
                <i className="fa-regular fa-envelope ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="email"
                  name="mail"
                  placeholder="Enter Email"
                />
              </div>
              <div className="password-input border-1 rounded-lg shadow-lg mb-4">
                <i className="fa-solid fa-lock ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="confirm-password-input border-1 rounded-lg shadow-lg mb-4">
                <i className="fa-solid fa-lock ml-4"></i>
                <input
                  className="w-100 focus:outline-none p-2 ml-2"
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="register-term mt-4">
                <input className="mr-5" id="term" type="checkbox" name="rem" />
                <label htmlFor="term">I agree to all terms</label>
              </div>
              <div className="login-btn mt-4">
                <Button
                  btnName={"Register"}
                  btnCss={
                    "bg-red-200 rounded pt-3 pb-3 pl-7 pr-7 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
                  }
                />
              </div>
              <div className="login-other mt-4">
                <p>
                  Already have an account?{" "}
                  <a className="text-blue-700" href="/login">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
