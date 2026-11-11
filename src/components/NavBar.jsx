
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const location = useLocation();

  return (
    <header className="site-header">

      <Link to="/" className="site-brand">
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="9" y="13" width="46" height="45"
            rx="9" fill="#1266D6"
            stroke="#38BDF8" strokeWidth="3" />
          <path d="M9 27H55"
            stroke="#38BDF8" strokeWidth="3" />
          <path d="M22 7V18M42 7V18"
            stroke="#E0F2FE" strokeWidth="6"
            strokeLinecap="round" />
          <path d="M19 38L29 47L45 31"
            stroke="white" strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>

        <span>
          Subscription
          <strong>Tracker</strong>
        </span>
      </Link>

      <nav className="menu">
        <Link to="/"
          className={location.pathname === "/" ? "selected" : ""}>
          Home
        </Link>

        <Link to="/about"
          className={location.pathname === "/about" ? "selected" : ""}>
          About Us
        </Link>

        <Link to="/features"
          className={location.pathname === "/features" ? "selected" : ""}>
          Features
        </Link>

        <Link to="/contact"
          className={location.pathname === "/contact" ? "selected" : ""}>
          Contact
        </Link>

        <Link to="/subscriptions"
          className={location.pathname === "/subscriptions" ? "selected" : ""}>
          My Subscriptions
        </Link>
      </nav>

    </header>
  );
}

export default Navbar;
