import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api";

const Register = (setToken, navigate) => {
  // props.setToken
  // const {setToken} = props
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const results = await registerUser(username, password);
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
      <Link to="/login">Already have an account? Log in here</Link>
    </form>
  );
};

export default Register;
