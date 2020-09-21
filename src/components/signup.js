import React, { useState } from "react";
import {
  FcAddressBook,
  FcPrivacy,
  FcBusinessContact,
  FcCalendar,
} from "react-icons/fc";

const Signup = () => {
  const handlesubmit = async (e) => {
    e.preventDefault();
    let name = e.target.Name.value.trim();
    let email = e.target.Email.value.trim();
    let password = e.target.Password.value.trim();
    let age = e.target.Age.value.trim();

    console.log({ name, email, password, age });
  };
  return (
    <form onSubmit={handlesubmit} className="signupform">
      <div className="input--container">
        <span className="input--container__icon">
          <FcBusinessContact />
        </span>
        <input type="text" placeholder="Name" name="Name" required></input>
      </div>
      <div className="input--container">
        <span className="input--container__icon">
          <FcAddressBook />
        </span>
        <input type="email" placeholder="Email" name="Email" required></input>
      </div>
      <div className="input--container">
        <span className="input--container__icon">
          <FcCalendar />
        </span>
        <input type="number" placeholder="Age" name="Age"></input>
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
        ></input>
      </div>

      <button className="header--btn">Submit</button>
    </form>
  );
};
export default Signup;
