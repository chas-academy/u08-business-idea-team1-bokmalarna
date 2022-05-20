import React from "react";

export const Footer = () => {
  return (
    <footer className="darkbrown d-flex justify-content-center">
      <div className="container-lg text-white m-2">
        <div className="row align-items-start">
          <img
            src="bookowl.png"
            className="img-fluid p-0 col"
            style={{ width: "30%" }}
          />

          <div className="container col p-0 d-flex flex-column align-items-center">
            <h4 className="mt-5 fs-6 m-2">
              <a
                href="#"
                className="text-decoration-none text-white text-decoration-underline"
              >
                About us
              </a>
            </h4>

            <h4 className="mt-5 fs-6 text-decoration-underline m-2">Socials</h4>
            <ul className="list-group list-group-flush d-flex flex-column unstyled">
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Github
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://www.instagram.com/"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-instagram m-2"></i>
                  Instagram
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://twitter.com/"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-twitter m-2"></i>
                  Twitter
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://www.linkedin.com/"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-linkedin m-2"></i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="container col p-0 d-flex flex-column align-items-center">
            <h4 className="mt-5 fs-6 text-decoration-underline m-2">
              Made by:
            </h4>
            <ul className="list-group list-group-flush d-flex flex-column unstyled">
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/amawre"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Amanda
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/Jonon"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Jonathan
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/DavidMelander"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  David
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/fbarfvestam"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Filip
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/Albatraoz12"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Dimos
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/frinica"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Frida
                </a>
              </li>
              <li className="list-group-item darkbrown p-0 border-0 mb-1">
                <a
                  href="https://github.com/lkthorn"
                  className="text-decoration-none text-white"
                >
                  <i class="bi bi-github m-2"></i>
                  Licia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
