import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="page contact-page">
      <section className="content-hero">
        <p className="tag">Contact</p>
        <h1>Send feedback about QuickMeal Finder.</h1>
        <p>
          This contact form is included to complete the application structure and improve the user experience.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea placeholder="Write your message" rows="5" required></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>

          {sent && <p className="success-msg">Message sent successfully.</p>}
        </form>

        <div className="contact-card">
          <h2>Project Info</h2>
          <p><strong>Project:</strong> QuickMeal Finder</p>
          <p><strong>Course:</strong> CSCI390 Web Programming</p>
          <p><strong>Type:</strong> React Frontend Application</p>
          <p><strong>Email:</strong> quickmeal@example.com</p>
        </div>
      </section>
    </main>
  );
}