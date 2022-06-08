import axios from "axios";
import React, { useEffect, useState } from "react";
import "./edit.css";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

export const Edit = () => {
	const navigate = useNavigate();
  const user = Cookies.get("access_token");
  const [formData, setFormData] = useState({})
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const { id, firstName, lastName, city, email } =
    formData;

  const getUserAndSetFormData = async () => {
    try {
      const res = await axios
      .get(`${process.env.REACT_APP_API_URL}user/protected`, {
        withCredentials: true,
        headers: {
					Authorization: `Bearer ${user}`,
				},
      })
        setFormData(res.data.user);
      
    } catch (error) {
      console.warn(error)
    }
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    setFormErrors(validate(formData));
    setSubmitted(true);
    getUserAndSetFormData();
  };

  const updateUser = async (e) => {

    try {
      const userData = formData;

      const API_URL = `${process.env.REACT_APP_API_URL}user/`;
      const userId = id;
      
      const res = await axios.put(API_URL + "/" + userId + "/edit", userData)

    } catch (error) {
      console.warn(error)
    }
  }

  const validate = (values) => {
    // Empty errors object - data is added if the form is not filled out properly
    const errors = {};
    // Regular expression to validate the email format:
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Display error messages if the user submits incorrect data in the form and stop registration from succeeding
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

    if (Object.keys(errors).length === 0) {
      setError(false);
    }
    return errors;
  };

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      getUserAndSetFormData();
      if (error === false) {
        updateUser()
      }
    }
  }, [user, error]);


  return (
    <>
      <section className="m-5">
        <h1 className="mb-5 text-center">Settings</h1>
        <form className="row g-3">
          <h2>Contact Info</h2>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <p>{formErrors.firstName}</p>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              defaultValue={firstName}
              onChange={handleOnChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <p>{formErrors.lastName}</p>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              defaultValue={lastName}
              onChange={handleOnChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <p>{formErrors.city}</p>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              defaultValue={city}
              onChange={handleOnChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <p>{formErrors.email}</p>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              defaultValue={email}
              onChange={handleOnChange}
            />
          </div>

          <div className="col-12 pt-4 text-center d-flex justify-content-end" >
            <button
              type="button"
              className="btn btn-primary btn-lg update-contactinfo-button"
              onClick={handleOnSubmit}
            >
              Update
            </button>
          </div>
        </form>

        <form className="row g-3">
        <h2>Reset password</h2>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <p>{formErrors.email}</p>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              defaultValue={password}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Confirm Password
            </label>
            <p>{formErrors.email}</p>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              defaultValue={confirmPassword}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-12 pt-4 text-center d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary btn-lg password-chane-button"
              onClick={handleOnSubmit}
            >
              Change Password
            </button>
          </div>
        </form>
      </section>
    </>
  );
};