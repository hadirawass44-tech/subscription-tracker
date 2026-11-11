
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-box">

        <h1>About <span>Us</span></h1>

        <p>
          Subscription Tracker is a simple website that
          helps users manage their subscriptions and
          keep track of monthly expenses.
        </p>

        <p>
          Our goal is to make subscription management
          easier by allowing users to organize their
          services and calculate monthly spending.
        </p>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To help people stay organized, manage their
            subscriptions, and understand how much
            money they spend every month.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
