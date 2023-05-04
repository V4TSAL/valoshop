import VImage from "../components/VImages";
import VImage2 from "../components/VImage2";
import { useEffect, useState } from "react";
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = {
    username: event.target.username.value,
    password: event.target.password.value,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "api/senduserdata";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  console.log(response.redirected, response.url);
  if (response.redirected) {
    window.location = response.url;
  }
  const result = await response.json();
  console.log(result);
  if (result.res.type === "auth") {
    alert("Wrong username or password");
  }
};
const login = () => {
  return (
    <div className="formdiv">
      <VImage />
      <VImage2 />
      <form className="mainform" onSubmit={handleSubmit}>
        <h1 className="loginhead">Enter your username and password</h1>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          name="username"
        />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
        />
        <button className="logbut">Submit</button>
      </form>
    </div>
  );
};

export default login;
