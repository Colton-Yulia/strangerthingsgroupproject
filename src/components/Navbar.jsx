import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ logout, token }) => {
  return (
    <header>
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link to="/posts">Posts</Link>

        {token ? (
          <Link to="/" onClick={() => logout()}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
