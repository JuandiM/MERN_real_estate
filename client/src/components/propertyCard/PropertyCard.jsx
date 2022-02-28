import React from "react";
import "./propertyCard.scss";
import { Link } from "react-router-dom";

const PropertyCard = ({ properties }) => {
  return (
    <>
      {properties.map((d, index) => (
        <div className="property">
          <div key={index}>
            <img src={d.carouselImg.img1} alt="" className="propImage" />

            <div className="propInfo">
              <div className="propTitle">
                <h3>{d.title}</h3>
              </div>

              <div className="propFeat">
                <span>{d.features.bedrooms}</span>
                <span>{d.features.bath}</span>
                <span>{d.features.built}</span>
              </div>

              <div className="propPrice">
                <p>
                  PRICE: <span>{d.price}</span>
                </p>
              </div>
              <div className="propDesc">
                <p>{d.description}</p>
              </div>
              <Link to={`/properties/${d._id}`} className="link">
                <button className="btn" type="submit">
                  View more
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyCard;
