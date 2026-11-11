
import { useState } from "react";
import "./Subscription.css";

function Subscriptions() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [subscriptions, setSubscriptions] = useState([]);

  function addSubscription(e) {
    e.preventDefault();

    const newSubscription = {
      name: name,
      price: Number(price)
    };

    setSubscriptions([...subscriptions, newSubscription]);

    setName("");
    setPrice("");
  }

  function deleteSubscription(index) {
    setSubscriptions(
      subscriptions.filter((item, i) => i !== index)
    );
  }

  let total = 0;

  subscriptions.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div className="subscriptions">
      <h1>My Subscriptions</h1>

      <h2>Add Subscription</h2>

      <form onSubmit={addSubscription}>
        <input
          type="text"
          placeholder="Subscription Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Monthly Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        
<button type="submit" className="add-btn">
  💳 ADD SUBSCRIPTION
</button>

      </form>

      <h2>Your Subscriptions</h2>

      {subscriptions.map((item, index) => (
        <div className="subscription-card" key={index}>
          <p>{item.name} - ${item.price.toFixed(2)}</p>

          <button onClick={() => deleteSubscription(index)}>
            Delete
          </button>
        </div>
      ))}

      <h2>Total Monthly Cost: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Subscriptions;
