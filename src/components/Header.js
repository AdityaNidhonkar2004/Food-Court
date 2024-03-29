import { useState } from "react";
import { Link } from "react-router-dom";
// import FoodFireLogo from "../Images/Food Fire Logo.png";
import { LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
// Title component for display logo
const Title = () => (
  <a href="/about">
    <img
      className="logo"
      src={LOGO}
      alt="Food Fire Logo"
      // title="Food Fire"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Order
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
              🛒-({cartItems.length})
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
