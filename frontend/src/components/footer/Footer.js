import React from "react";

export const Footer = () => {
  return (
    <footer className="darkbrown-nav d-flex justify-content-center">
      <div className="container-lg text-white m-2">
        <div className=" align-items-start d-flex">
          <div className="mt-4 col d-flex flex-column align-items-center">
            <img src="bookowl.png" className="p-1" style={{ width: 90 }} />
            <p className="fs-6 mt-4">
              <img src="copyright.png" style={{ width: 15 }} className="m-1" />
              2022 Bokmalarna
            </p>
          </div>
          <div className="container col p-0 d-flex flex-column align-items-center">
            <h4 className="mt-3 fs-6 text-decoration-underline">Socials</h4>
            <ul className="list-group list-group-flush d-flex flex-column list-unstyled">
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  Github
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://www.instagram.com/"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-instagram m-2"></i>
                  Instagram
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://twitter.com/"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-twitter m-2"></i>
                  Twitter
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://www.linkedin.com/"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-linkedin m-2"></i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="container col p-0 d-flex flex-column align-items-center">
            <h4 className="mt-3 fs-6 text-decoration-underline">Made by:</h4>
            <ul className="list-group list-group-flush d-flex flex-column list-unstyled">
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/amawre"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  Amanda
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/Jonon"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  Jonathan
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/DavidMelander"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  David
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/fbarfvestam"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  Filip
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/Albatraoz12"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  Dimos
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/frinica"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
                  Frida
                </a>
              </li>
              <li className="p-0 border-0 mb-1">
                <a
                  href="https://github.com/lkthorn"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-github m-2"></i>
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
