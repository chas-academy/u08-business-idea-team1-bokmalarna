import React from "react";

export const Dashboard = () => {
  return (
    /*  NAV GOES HERE */
    <div className="container-xl lightbrownbg">
      <section className="container">
        <div className="text-center">
          <h1>Welcome Ugglan</h1>
          <p>"A book is a gift you can open again and again"</p>
          <button className="btn btn-outline-secondary m-2">
            New Messages
          </button>
          <button className="btn btn-outline-secondary m-2">Settings</button>
        </div>
        <section>
          {/*  LOANED BOOKS */}
          <h3 className="text-center mt-5">List of loaned books</h3>
          <div className="card shadow-lg p-3 mb-5">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Book Title</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Return</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Boken om lilla ugglan</td>
                  <td>Dimos</td>
                  <td>
                    <button className="btn btn-outline-danger">Return</button>
                  </td>
                </tr>
                <tr>
                  <td>Ugglornas värld</td>
                  <td>Filip</td>
                  <td>
                    <button className="btn btn-outline-danger">Return</button>
                  </td>
                </tr>
                <tr>
                  <td>Sagan om de två ugglorna</td>
                  <td>Frida</td>
                  <td>
                    <button className="btn btn-outline-danger">Return</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};
