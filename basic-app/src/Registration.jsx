import React, { useState } from "react";
import "./index.css";
const Registration = () => {
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(objData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <div className="form">
          <h1>Registration Form</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={event => getInputs(event.target.value, event.target.name)}
          />
          <input
            name="password"
            onChange={event => getInputs(event.target.value, event.target.name)}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={event => getInputs(event.target.value, event.target.name)}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={event => getInputs(event.target.value, event.target.name)}
            type="date"
            name="date"
            placeholder="date"
          />
          <input
            onChange={event => getInputs(event.target.value, event.target.name)}
            type="file"
            name="file"
            placeholder="File"
          />
          <input type="submit" className="btn" />
          <input type="reset" className="btn" />
        </div>
      </div>
    </form>
  );
};

export default Registration;
