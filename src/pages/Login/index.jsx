import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      email: email,
      password: password,
    };
    axios.post("/auth/login", login).then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/profile")
    })
  };
  return (
    <>
      <main className="container-fluid">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Your Password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
