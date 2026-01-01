import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => { 
const { user, logout } = useContext(AuthContext);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    {user ? (
  <>
    <li>Hello, {user.name}</li>
    <li>
      <Link to="/cart">
        <button className="login">Cart</button>
      </Link>
    </li>
    <li>
      <Link to="/myorders">
        <button className="login">My Orders</button>
      </Link>
    </li>
    <li>
      <button className="login" onClick={logout}>
        Logout
      </button>
    </li>
  </>
) : (
  <>
    <li>
      <Link to="/login">
        <button className="login">Login</button>
      </Link>
    </li>
    <li>
      <Link to="/signup">
        <button className="login">Signup</button>
      </Link>
    </li>
  </>
)}

                </ul>
            </div>
        </div>
    );
}

export default Header;