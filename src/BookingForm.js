import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header className="booking-header">
      <section className="booking-section">
        <form onSubmit={handleSubmit} className="booking-form" aria-label="Table booking form">
          <fieldset className="booking-fieldset">
            <legend className="booking-title">Reserve a Table</legend>

            <div className="form-group">
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" aria-label="Make Your Reservation">Make Your Reservation</button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
