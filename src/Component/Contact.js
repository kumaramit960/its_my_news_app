import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="card  bg-dark text-light">
        <div className="card-header">
          <h1>Contact Us Page</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            Hi amitkumar09.dhn@gmail.com Thank you for your interest in News
            Website. I’ll send over your reply for any query amit kumar Amit
            News Website
          </p>
          <h3>Private Note</h3>
          <p>
            If you have any queries or doubt to please get in touch with us this
            mail id amitkumar09.dhn@gmail.com
          </p>
          <Link to="https://mail.google.com/mail" className="btn btn-primary">
            Send Mail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
