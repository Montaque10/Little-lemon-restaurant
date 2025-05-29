import React from "react";
import BookingForm from "../../BookingForm/BookingForm";
import "./Booking.css";

const Booking = (props) => {
  return (
    <main className="booking-container">
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </main>
  );
};

export default Booking;
