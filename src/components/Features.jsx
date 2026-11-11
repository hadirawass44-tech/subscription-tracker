
import "./Features.css";

function Features() {
  return (
    <div className="features-page">

      <h1>Our <span>Features</span></h1>

      <p className="features-description">
        Everything you need to manage your subscriptions
        in one place.
      </p>

      <div className="features-cards">

        <div className="feature-box">
          <div className="feature-icon">📋</div>
          <h2>Manage Subscriptions</h2>
          <p>
            Add, view, and delete your subscriptions
            easily.
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">💳</div>
          <h2>Track Your Expenses</h2>
          <p>
            Calculate how much money you spend on
            subscriptions every month.
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">📅</div>
          <h2>Organize Payments</h2>
          <p>
            Keep your subscription information organized
            and easy to access.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Features;
