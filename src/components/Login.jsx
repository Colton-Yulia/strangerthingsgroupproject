//const BASE_URL = "https://strangers-things.herokuapp.com/api/2304-ftb-et-web-ft";
//const COHORT_NAME = '2304-FTB-ET-WEB-FT';
import "./login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api-adapters";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log(result);
      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="loginBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
