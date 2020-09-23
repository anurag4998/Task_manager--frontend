import React, { useState } from "react";
import { FcAddressBook, FcPrivacy, FcViewDetails } from "react-icons/fc";
import postlogindata from "../apicall/login";
import { HiArrowCircleRight } from "react-icons/hi";
import Signup from "./signup";
import hero from "../photos/hero1.jpg";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [Switch, setSwitch] = useState(true);
  const [flag, setFlag] = useState({});

  const handlesubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value.trim();
    let password = e.target.password.value.trim();
    setFlag(await postlogindata(email, password, "loginrequest"));
  };
  const handleClick = () => {
    setSwitch(!Switch);
  };
  const usernameStyle = {
    backgroundColor: "#efefef ",
  };

  const passwordStyle = {
    backgroundColor: " #e3e3e3 ",
  };

  return (
    <div className="loginwrapper">
      <div className="logincontainer row align-items-center justify-content-center">
        <div className="heroicon">
          <h2>
            {" "}
            <span>
              <FcViewDetails />
            </span>
            TaskManager{" "}
          </h2>
        </div>
        <div className="image-container col-lg-5 col-xl-6 d-none d-lg-block ">
          <div className="image-wrapper ">
            <img src={hero} alt="hero"></img>
          </div>
        </div>
        <div className="scene col-12 col-lg-7 col-xl-6">
          <div className={Switch ? "card" : "card is-flipped"}>
            <div className="card__face card__face--front form">
              <form className="Loginform">
                <h4>
                  {flag.response == true ? (
                    <Redirect to="/profile" />
                  ) : (
                    flag.error
                  )}
                </h4>

                <div className="input--container">
                  <span className="input--container__icon">
                    <FcAddressBook />
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    style={usernameStyle}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="input--container">
                  <span className="input--container__icon">
                    <FcPrivacy />
                  </span>
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    style={passwordStyle}
                    autoComplete="off"
                  ></input>
                </div>
                <button className="header--btn">Login</button>
              </form>
              <button className="Loginsignupbtn" onClick={handleClick}>
                Create Your Account
                <span>
                  {" "}
                  <HiArrowCircleRight />
                </span>
              </button>
            </div>
            <div className="card__face card__face--back form">
              <Signup />
              <button className="Loginsignupbtn" onClick={handleClick}>
                Login
                <span>
                  {" "}
                  <HiArrowCircleRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
