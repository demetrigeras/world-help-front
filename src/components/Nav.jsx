import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const { user } = props;

  return (
    <nav>
        <div className="page-header">

            <div className="home">
                <NavLink to="/">Home</NavLink> 
            </div>

        <div className="signInOut">
        {user ? (
          <>
            <div>Welcome back {user.name}</div>
          <div className="signOut"> 
            <NavLink to="/sign-out">Sign Out</NavLink>
          </div>   
          </>
        ) : (
          <>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>
          </>
        )}
          </div>

        </div> 
        
    </nav>
  );
}
