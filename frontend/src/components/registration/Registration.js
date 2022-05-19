import React from "react";

export const Registration = () => {
  return (
    <>
      <section>
        <h1>Registration</h1>
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
          </div>
        </form>
      </section>
    </>
  );
};
