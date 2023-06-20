import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api-adapters";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log(result);
      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);
      navigate("/posts");
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
        <Link to="/login">Already have an account? Log in here</Link>
      </form>
    </div>
  );
};

export default Register;
