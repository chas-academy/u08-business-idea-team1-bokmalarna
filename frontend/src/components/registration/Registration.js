import axios from "axios";
import React, { useEffect, useState } from "react";

export const Registration = () => {
  const API_URL = "http://localhost:8000/user/";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  /* const [submitted, setSubmitted] = useState(false); */
  const { firstName, lastName, city, email, password, confirmPassword } =
    formData;

  const onChange = (e) => {
    const { firstName, lastName, city, email, password, confirmPassword } =
      e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    /* setSubmitted(true); */
    const userData = {
      firstName,
      lastName,
      city,
      email,
      password,
    };

    register(userData);
  };

  /*  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitted) {
      console.log(formData);
    }
  }, [formErrors]); */

  const validate = (values) => {
    // Empty errors object - data is added if the form is not filled out properly
    const errors = {};
    // Regular expression to validate the email format:
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Display error messages if the user submits incorrect data in the form
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Must be identical to password!";
    }
    return errors;
  };

  const register = async (userData) => {
    await axios.post(API_URL + "register", userData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <section>
        <h1>Registration</h1>
        {Object.keys(formErrors).length === 0 && submitted ? (
          <div>Registration successful!</div>
        ) : (
          <></>
        )}
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="form-floating mb3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
              <label for="floatingInput">First name</label>
            </div>
            <p>{formErrors.firstName}</p>
          </div>

          <div className="form-group">
            <div className="form-floating mb3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
              <label for="floatingInput">Last name</label>
            </div>
            <p>{formErrors.lastName}</p>
          </div>

          <div className="form-group">
            <div className="form-floating mb3">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={city}
                onChange={onChange}
              />
              <label for="floatingInput">City of residence</label>
            </div>
            <p>{formErrors.city}</p>
          </div>

          <div className="form-group">
            <div className="form-floating mb3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label for="floatingInput">Email</label>
            </div>
            <p>{formErrors.email}</p>
          </div>

          <div className="form-group">
            <div className="form-floating mb3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <label for="floatingInput">Password</label>
            </div>
            <p>{formErrors.password}</p>
          </div>

          <div className="form-group">
            <div className="form-floating mb3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
              />
              <label for="floatingInput">Confirm Password</label>
            </div>
            <p>{formErrors.confirmPassword}</p>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register User
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
