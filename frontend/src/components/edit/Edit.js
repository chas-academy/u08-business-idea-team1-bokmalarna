import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

export const Edit = () => {
  const API_URL = `${process.env.REACT_APP_API_URL}/user/`;

	const navigate = useNavigate();
  const user = Cookies.get("access_token");
  const [getUser, setGetUser] = useState({});

  const checkUser = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/protected`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.user) {
          console.log(res.data.user);
          setGetUser(res.data.user);
        }
      });
  };

  useEffect(() => {
    if (!user) {
      navigate('/')
    } else {
      checkUser();
    }
  }, [user]);


  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const { firstName, lastName, city, email } =
    getUser;

  const onChange = (e) => {
    setGetUser({ ...getUser, [e.target.name]: e.target.value });
    console.log(getUser);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(getUser));
    setSubmitted(true);
    checkUser();
  };

  useEffect(() => {
    if (error === false) {
      edit(getUser);
    }
  }, [error]);

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

  const edit = async (userData) => {
    const userId = getUser.id
    await axios.put(API_URL + "/" + userId + "/edit", userData).then((res) => {
      console.log(res.data);
    });
    alert("Settings will be updated next time you log in!")
  };

  console.log(user);

  return (
    <>
      <section className="m-5">
        <h1 className="mb-5 text-center">Settings</h1>
        <form className="row g-3">
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
              defaultValue={getUser.firstName}
              onChange={onChange}
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
              defaultValue={getUser.lastName}
              onChange={onChange}
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
              defaultValue={getUser.city}
              onChange={onChange}
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
              defaultValue={getUser.email}
              onChange={onChange}
            />
          </div>

          <div className="col-12 pt-4 text-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={onSubmit}
            >
              Update
            </button>
          </div>

          <div className="col-12 pt-1 text-center">
              <button
                type="submit"
                className="btn btn btn-lg"
              
              >
                <a href="edit/password" className="text-decoration-none">
                Change Password
                </a>
              </button>
          </div>
        </form>
      </section>
    </>
  );
};
