import React from "react";
import "./footer.scss";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <img className="logoF" src="assets/logo1d.png" alt="logo" />
          <p>
            We are specialists in luxury & modern properties by the beach. Get
            in touch to find your dream home in a desirable location.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="columnLink col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Pages</h5>
          <ul className="list-unstyled">
            <li>
              <a className="link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="/">
                About us
              </a>
            </li>
            <li>
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="columnLink col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Properties</h5>
          <ul className="list-unstyled">
            <li>
              <a className="link" href="/properties/villas">
                Villas
              </a>
            </li>
            <li>
              <a className="link" href="/properties/apartments">
                Apartments
              </a>
            </li>
            <li>
              <a className="link" href="/properties">
                All properties
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      <a className="link" href="https://github.com/JuandiM">
        © 2022 Copyright: Juandi Mena
      </a>
    </div>
  </footer>
);

export default Footer;
