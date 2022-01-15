import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, birth_date, password, password_confirmation } = event.target;
    console.log(name.value, email.value, birth_date.value, password.value, password_confirmation.value)
    const data = {
      name: name.value,
      email: email.value,
      birth_date: birth_date.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    };
    console.log(data)
    if (password.value !== password_confirmation.value) {
      alert("As senhas não são iguais.");
    } else {
      await axios.post("user/create", data).then(() => {
        navigate("/login");
      });
    }
  };
  return (
    <>
      <main className="container-fluid">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="form-control"
              minlength="3"
              maxlength="100"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <labe htmlFor="birth_date" className="form-label">
              Birth Of Data:{" "}
            </labe>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              className="form-control"
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
              placeholder="Password"
              minlength="8"
              maxlength="30"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">
              Password Confirmation:
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Password Confirmation"
              className="form-control"
              minlength="8"
              maxlength="30"
              required
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </main>
    </>
  );
}
