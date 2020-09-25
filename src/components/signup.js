import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import postSignupData from "../apicall/signup";
import Dashboard from "../components/dashboard";

import {
  FcAddressBook,
  FcPrivacy,
  FcBusinessContact,
  FcCalendar,
} from "react-icons/fc";

const Signup = () => {
  const [flag, setFlag] = useState({});

  const handleSignUp = async (e) => {
    e.preventDefault();
    let name = e.target.Name.value.trim();
    let email = e.target.Email.value.trim();
    let password = e.target.Password.value.trim();
    let age = e.target.Age.value.trim();
    setFlag(await postSignupData(email, password, name, age));
  };
  return (
    <form onSubmit={handleSignUp} className="signupform">
      <h4 className="error">
        {flag.response == true ? (
          <Redirect to="/profile" component={Dashboard} />
        ) : (
          flag.error
        )}
      </h4>
      <div className="input--container">
        <span className="input--container__icon">
          <FcBusinessContact />
        </span>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          required
          autoComplete="off"
        ></input>
      </div>
      <div className="input--container">
        <span className="input--container__icon">
          <FcAddressBook />
        </span>
        <input
          type="email"
          placeholder="Email"
          name="Email"
          required
          autoComplete="off"
        ></input>
      </div>
      <div className="input--container">
        <span className="input--container__icon">
          <FcCalendar />
        </span>
        <input
          type="number"
          placeholder="Age"
          name="Age"
          autoComplete="off"
        ></input>
      </div>
      <div className="input--container">
        <span className="input--container__icon">
          <FcPrivacy />
        </span>
        <input
          type="password"
          placeholder="Password"
          name="Password"
          required
          autoComplete="off"
        ></input>
      </div>

      <button className="header--btn">Submit</button>
    </form>
  );
};
export default Signup;
