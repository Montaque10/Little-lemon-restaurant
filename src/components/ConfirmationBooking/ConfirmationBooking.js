import React from "react";
import "./ConfirmationBooking.css";


const ConfirmedBooking = () => {
  return (
    <header className="confirmation-header">
      <section className="confirmation-section">
        <div className="confirmation-box">
          <h1 className="confirmation-title">🎉 Booking Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for your reservation. We look forward to serving you at Little Lemon!
          </p>
        </div>
      </section>
    </header>
  );
};

export default ConfirmedBooking;
