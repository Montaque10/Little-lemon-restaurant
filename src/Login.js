import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login-section">
      <h1>Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
