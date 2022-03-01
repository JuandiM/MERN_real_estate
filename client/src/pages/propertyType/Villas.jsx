import React, { useEffect, useState } from "react";
import "./properties.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../../config";

const Villas = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axiosInstance.get("/properties");
      setProperties(response.data);
    };
    fetchProperties();
  }, [properties]);
  return (
    <>
      <div className="intro">
        <div className="introTitle">
          <h2>Take a look to our exclusive portfolio of Villas</h2>
        </div>
        <div className="introDesc">
          <p>
            The best selection of luxury and modern villas located in a
            fascinating location. Our portfolio includes the finest selection of
            modern-style villas with up-to-date facilities and placed in
            desirable locations, close to the beach.
          </p>
        </div>
      </div>
      <>
        {properties.map((d, index) => (
          <div key={index} className="properties">
            {d.type === "villa" && (
              <div className="property">
                <>
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
                </>
              </div>
            )}
          </div>
        ))}
      </>
    </>
  );
};

export default Villas;
