
import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Menu from "../Menu/Menu";
import OrderOnline from "../OrderOnline/OrderOnline";
import BookingForm from "../BookingForm/BookingForm";
import ConfirmationBooking from "../ConfirmationBooking/ConfirmationBooking";
import Login from "../Login/Login";


const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};


const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(`${i}:00`);
    if (random() < 0.5) result.push(`${i}:30`);
  }

  return result;
};

const submitAPI = (formData) => true;

const updateTimes = (state, action) => {
  return { availableTimes: fetchAPI(new Date(action)) };
};

const initializeTimes = { availableTimes: fetchAPI(new Date()) };

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmation");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<OrderOnline />} />
        <Route
          path="booking"
          element={
            <BookingForm
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="confirmation" element={<ConfirmationBooking />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Main;
