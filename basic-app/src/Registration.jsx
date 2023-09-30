import React from "react";
import "./index.css";
const Registration = () => {
  const getInputs = event => {
    event.preventDefault();
  };
  return (
    <div className="form-wrapper">
      <div className="form">
        <h1>Registration Form</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={getInputs}
        />
        <input type="password" name="password" placeholder="Password" />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Submit" className="btn" />
      </div>
    </div>
  );
};

export default Registration;
