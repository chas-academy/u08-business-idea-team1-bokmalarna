import React from "react";

export const Dashboard = () => {
  return (
    /*  NAV GOES HERE */
    <div className="lightbrownbg">
      <section className="container">
        <div className="text-center p-5">
          <h1>Welcome Ugglan</h1>
          <p className="dashboard-p m-5">
            "A book is a gift you can open again and again"
          </p>
          <button className="btn btn-outline-secondary m-2">
            New Messages
          </button>
          <button className="btn btn-outline-secondary m-2">Settings</button>
        </div>
        <section>
          {/*  LOANED BOOKS */}
          <h3 className="text-center mt-5 mb-3">List of loaned books</h3>
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
                    <button className="btn btn-outline-danger btn-sm">
                      Return
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Ugglornas värld</td>
                  <td>Filip</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Return
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Sagan om de två ugglorna</td>
                  <td>Frida</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Return
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          {/*  MY BOOKSHELF */}
          <div className="text-center mt-5 mb-3">
            <h3 className="text-center">My bookshelf</h3>
            <button className="btn btn-outline-primary m-3">
              Add new book
            </button>
          </div>
          <div className="card shadow-lg p-3 mb-5">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Book Title</th>
                  <th scope="col">Action</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ugglelexikonet</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                  <td>
                    <span class="badge badge-success">Available</span>
                  </td>
                </tr>
                <tr>
                  <td>Ugglornas magiska värld</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                  <td>
                    <span class="badge badge-danger">Unavailable</span>
                  </td>
                </tr>
                <tr>
                  <td>Owl Fight Club</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                  <td>
                    <span class="badge badge-success">Available</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
    /* FOOTER GOES HERE */
  );
};
