import React, { useState } from 'react'; // Import useState correctly
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [result, setResult] = useState(""); // Initialize result state

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setResult("Sending..."); // Show a temporary message while sending

    const formData = new FormData(event.target);
    formData.append("access_key", "70fec83c-4d8f-454c-a1af-6e822e09a28e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); // Reset the form
      } else {
        console.error("Error:", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>GET IN TOUCH</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>LET'S TALK</h1>
          <p>
            I am available to do any project you want. If you need me, contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:anupamchettri67@gmail.com">
              <img src={mail_icon} alt="Mail Icon" />
              </a>
              <p>anupamchettri67@gmail.com</p>
            </div>
            <div className="contact-detail">
            <a href="tel:9812951946">
          <img src={call_icon} alt="Call Icon" />
             </a>
              <p>9812951946</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Bhairahwa</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" required />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
        {result && <p className="result-message">{result}</p>}
      </div>
    </div>
  );
};

export default Contact;
