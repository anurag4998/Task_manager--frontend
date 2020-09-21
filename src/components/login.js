import React, { useState } from "react";
import postdata from "../apicall/post";
import Signup from "./signup";
import hero from "../photos/hero1.jpg";
import { FcAddressBook, FcPrivacy } from "react-icons/fc";

const Login = () => {
  const [flag, setFlag] = useState(true);
  const handlesubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value.trim();
    let password = e.target.password.value.trim();
    setFlag(await postdata(email, password, "loginrequest"));
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
        <div className="image-container col-6 d-none d-lg-block ">
          <div className="image-wrapper ">
            <img src={hero}></img>
          </div>
        </div>
        <div className="form-container col-12 col-lg-6 ">
          <div className="form">
            <form onSubmit={handlesubmit} className="Loginform">
              <h4>{flag ? undefined : "Incorrect email/password"}</h4>
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
            <div>
              <h3>Join Now</h3>
              <Signup buttonLabel="Signup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
