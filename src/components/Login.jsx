//const BASE_URL = "https://strangers-things.herokuapp.com/api/2304-ftb-et-web-ft";
//const COHORT_NAME = '2304-FTB-ET-WEB-FT';

import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api";

const Login = (setToken, navigate) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate("/profile");
    } else {
      console.log(results.error.message);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="loginBtn"
        type="password"
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="loginBtn">
        Submit
      </button>
      <Link to="/register">Don't have an account? Register here</Link>
    </form>
  );
};

export default Login;
