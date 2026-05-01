import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="page">
      <section className="content-hero">
        <span className="tag">Contact</span>
        <h1>Send feedback about QuickMeal Finder.</h1>
        <p>
          This page includes a simple frontend contact form to complete the application structure
          and improve user experience.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form" onSubmit={submitForm}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea rows="5" placeholder="Write your message" required></textarea>

          <button className="primary-btn" type="submit">
            Send Message
          </button>

          {sent && <p className="success-msg">Message sent successfully ✅</p>}
        </form>

        <div className="contact-card">
          <h2>Project Details</h2>
          <p><strong>Project:</strong> QuickMeal Finder</p>
          <p><strong>Course:</strong> CSCI390 Web Programming</p>
          <p><strong>Technology:</strong> ReactJS Frontend</p>
          <p><strong>Deployment:</strong> GitHub + Vercel</p>
        </div>
      </section>
    </main>
  );
}