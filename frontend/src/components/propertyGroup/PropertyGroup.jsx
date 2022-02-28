import React from "react";
import { Link } from "react-router-dom";
import "./propertyGroup.scss";

const PropertyGroup = () => {
  return (
    <div className="wrapper">
      <div className="property">
        <img
          src="assets/carousel/luxuryvilla1.jpg"
          alt=""
          className="propImage"
        />
        <div className="propInfo">
          <div className="propTitle">
            <h3>Luxury villas</h3>
          </div>
          <div className="propDesc">
            <p>
              Find the most exclusive selection of luxury and modern villas
              located in a fascinating location. Our portfolio includes the
              finest selection of modern-style villas with up-to-date facilities
              and placed in desirable locations, close to the beach.
            </p>
          </div>
          <Link className="link" to="/properties/villas">
            <button className="btn" type="submit">
              View more
            </button>
          </Link>
        </div>
      </div>
      <div className="property">
        <div className="propInfo">
          <div className="propTitle">
            <h3>Modern apartments</h3>
          </div>
          <div className="propDesc">
            <p>
              The best selection of luxury and modern apartments & penthouses
              located in a fascinating location byt the beach. Our portfolio
              includes the finest selection of modern-style and contemporary
              apartments with up-to-date facilities and placed in desirable
              locations, close to the beach.
            </p>
          </div>
          <Link className="link" to="/properties/apartments">
            <button className="btn" type="submit">
              View more
            </button>
          </Link>
        </div>
        <img
          src="assets/carousel/luxuryinterior.jpg"
          alt=""
          className="propImage"
        />
      </div>
      <div className="property">
        <img
          src="assets/carousel/modern-villa.jpg"
          alt=""
          className="propImage"
        />
        <div className="propInfo">
          <div className="propTitle">
            <h3>Contemporary villas & apartments</h3>
          </div>
          <div className="propDesc">
            <p>
              Our wide range of properties include an extensive and exclusive
              selection of top properties. From contemporary style villas to
              modern apartments. Some of them placed in the most exclusive
              location by the beach and others enjoying of front-line golf
              position.
            </p>
          </div>
          <Link className="link" to="/properties">
            <button className="btn" type="submit">
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyGroup;
