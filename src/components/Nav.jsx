import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const { user } = props;

  return (
    <nav>
      <div className="home">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="sign-in/out">
        {user ? (
          <>
            <div>Welcome back {user.name}</div>
            <NavLink to="/sign-out">Sign Out</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
