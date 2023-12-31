import { Link } from "react-router-dom";
import { useState } from "react";
import "./navBar.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn, allPosts }) => {
  const [input, setInput] = useState(allPosts);

  return (
    <div>
      {isLoggedIn ? (
        <div className="nav-bar">
          {" "}
          <div>
            <button className="btn">
              <Link to="/">Home</Link>
            </button>
            <button className="btn">
              <Link to="/profile">Profile</Link>
            </button>
            d
          </div>
          {/* implement search bar */}
          <div className="search">
            <button className="btn">
              <Link to="/posts">Posts</Link>
            </button>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                localStorage.removeItem("token");
              }}
            >
              Log Out
            </button>
            <button className="btn-creatpost">
              <Link to="/newpost">New Post</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="nav-bar">
          <div>
            <button className="btn">
              <Link to="/">Home</Link>
            </button>
          </div>
          <div>LogoPlaceHolder</div>
          <div>
            <button className="btn">
              <Link to="/posts">Posts</Link>
            </button>
            <button className="btn">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn">
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
