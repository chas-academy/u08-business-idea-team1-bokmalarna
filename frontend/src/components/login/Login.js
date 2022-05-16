import React from "react";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    login(userData);
  };

  const API_URL = "http://localhost:8080/user/";

  //Login
  const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data.email) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    }

    if (response.data.token) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    }

    return response.data;
  };

  //Logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const onLogout = () => {
    logout();
  };

  return (
    <>
      <section>
        <h1>Login</h1>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-controll"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-controll"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
      <section>
        <button className="btn" onClick={onLogout}>
          Logout
        </button>
      </section>
    </>
  );
};
