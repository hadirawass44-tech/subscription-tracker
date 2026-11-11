
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim().length < 2) {
      alert("Name must have at least 2 letters");
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert("Name must contain letters only");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (phone.length < 7 || phone.length > 15) {
      alert("Phone must contain 7 to 15 digits");
      return;
    }

    if (subject.trim() === "") {
      alert("Subject cannot be empty");
      return;
    }

    if (message.trim().length < 10) {
      alert("Message must have at least 10 characters");
      return;
    }

    alert("Message submitted successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          placeholder="7-15 digits (numbers only)"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/[^0-9]/g, ""))
          }
          minLength={7}
          maxLength={15}
          required
        />

        <label>Subject</label>
        <input
          type="text"
          placeholder="Enter the subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label>Message</label>
        <textarea
          placeholder="Write your message (at least 10 characters)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minLength={10}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
