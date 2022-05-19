import axios from "axios";
import React, { useEffect, useState } from "react";

export const Registration = () => {
  const API_URL = "http://localhost:8080/user/";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(true);
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
    setSubmitted(true);
  };

  useEffect(() => {
    if (error === false) {
      register(formData);
    }
  }, [error]);

  const validate = (values) => {
    // Empty errors object - data is added if the form is not filled out properly
    const errors = {};
    // Regular expression to validate the email format:
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Display error messages if the user submits incorrect data in the form
    if (!values.firstName) {
      errors.firstName = "First name is required!";
      setError(true);
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
      setError(true);
    }
    if (!values.city) {
      errors.city = "City is required!";
      setError(true);
    }
    if (!values.email) {
      errors.email = "Email is required!";
      setError(true);
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format!";
      setError(true);
    }
    if (!values.password) {
      errors.password = "Password is required!";
      setError(true);
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
      setError(true);
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required!";
      setError(true);
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Must be identical to password!";
      setError(true);
    }
    if (Object.keys(errors).length === 0) {
      setError(false);
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
        <form>
          <div className="form-floating m-3">
            <p>{formErrors.firstName}</p>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="firstName"
              value={firstName}
              onChange={onChange}
            />
            <label htmlFor="floatingInput">First name</label>
          </div>

          <div className="form-floating m-3">
            <label htmlFor="floatingInput">Last name</label>
            <p>{formErrors.lastName}</p>
            <div className="form-floating mb3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-floating m-3">
            <label htmlFor="floatingInput">City of residence</label>
            <p>{formErrors.city}</p>
            <div className="form-floating mb3">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={city}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-floating m-3">
            <label htmlFor="floatingInput">Email</label>
            <p>{formErrors.email}</p>
            <div className="form-floating mb3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-floating m-3">
            <label htmlFor="floatingInput">Password</label>
            <p>{formErrors.password}</p>
            <div className="form-floating mb3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-floating m-3">
            <label htmlFor="floatingInput">Confirm Password</label>
            <p>{formErrors.confirmPassword}</p>
            <div className="form-floating mb3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-floating m-3">
            <button type="submit" className="btn btn-block" onClick={onSubmit}>
              Register User
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
