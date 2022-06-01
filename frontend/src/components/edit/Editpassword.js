import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const EditPassword = () => {
  const API_URL = "http://localhost:8080/user/";


  const user = Cookies.get("access_token");
  const [getUser, setGetUser] = useState({});

  const checkUser = async () => {
    await axios
      .get("http://localhost:8080/user/protected", {
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
    if (user) {
      checkUser();
    } 
  }, [user]);


  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const {password, confirmPassword} =
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

    // Display error messages if the user submits incorrect data in the form and stop registration from succeeding
    if (!values.password) {
        errors.password = "Password is required!";
        setError(true);
      } else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters!";
        setError(true);
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Password does not match";
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

  const edit = async (userData) => {
    const userId = getUser.id
    await axios.put(API_URL + "/" + userId + "/edit" + "/password", userData).then((res) => {
      console.log(res.data);
    });
  };

  console.log(user);

  return (
    <>
      <section className="m-5">
        <h1 className="mb-5 text-center">Settings</h1>
        {Object.keys(formErrors).length === 0 && submitted ? (
          <div>Registration successful!</div>
        ) : (
          <></>
        )}
        <form className="row g-3 justify-content-center">
          
          <div className="col-md-6 w-25">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <p>{formErrors.password}</p>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="col-md-6 w-25">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <p>{formErrors.confirmPassword}</p>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              id="confirmPassword"
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

        </form>
      </section>
    </>
  );
};
