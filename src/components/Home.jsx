
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <div className="home-content">

        {/* Main Calendar Logo */}
        <div className="hero-logo">
          <svg viewBox="0 0 120 120" fill="none">
            <rect x="20" y="25" width="80" height="75"
              rx="15" fill="#1266D6"
              stroke="#38BDF8" strokeWidth="4" />
            <path d="M20 47H100" stroke="#38BDF8"
              strokeWidth="4" />
            <path d="M42 15V35M78 15V35"
              stroke="#E0F2FE" strokeWidth="9"
              strokeLinecap="round" />
            <path d="M40 72L54 85L82 56"
              stroke="white" strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </div>

        {/* Welcome Text */}
        <h1>
          Welcome to <span>Subscription Tracker</span>
        </h1>

        <p className="home-description">
          Manage all your subscriptions in one place.
          <br />
          Track your monthly expenses and never forget
          about your subscriptions again!
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <Link to="/subscriptions" className="home-primary-btn">
            + &nbsp; Manage Subscriptions
          </Link>

          <Link to="/about" className="home-secondary-btn">
            Learn More
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="home-features">

          <div className="home-card">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M32 8L55 24L32 40L9 24L32 8Z"
                stroke="currentColor" strokeWidth="5"
                strokeLinejoin="round" />
              <path d="M9 34L32 50L55 34M9 44L32 60L55 44"
                stroke="currentColor" strokeWidth="5"
                strokeLinejoin="round" />
            </svg>

            <h2>Organize</h2>
            <p>Keep all your subscriptions in one place.</p>
          </div>

          <div className="home-card">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M12 47V38M26 47V28M40 47V18M54 47V9"
                stroke="currentColor" strokeWidth="8"
                strokeLinecap="round" />
            </svg>

            <h2>Track Expenses</h2>
            <p>See your total monthly spending instantly.</p>
          </div>

          <div className="home-card">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M18 25C18 16 24 9 32 9S46 16 46 25V35L52 44H12L18 35V25Z"
                stroke="currentColor" strokeWidth="4"
                strokeLinejoin="round" />
              <path d="M26 51C27 58 37 58 38 51"
                stroke="currentColor" strokeWidth="4"
                strokeLinecap="round" />
            </svg>

            <h2>Stay Reminded</h2>
            <p>Keep track of your subscriptions and expenses.</p>
          </div>

        </div>
      </div>

      {/* Decorative Background Wave */}
      <svg className="home-wave"
        viewBox="0 0 1440 210"
        preserveAspectRatio="none">
        <path
          d="M0 100C230 130 260 230 540 155S970 70 1160 150S1350 100 1440 20"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
        />
      </svg>

    </div>
  );
}

export default Home;
