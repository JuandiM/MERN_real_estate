import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Apartments = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get("http://localhost:5000/api/properties");
      setProperties(response.data);
    };
    fetchProperties();
  }, [properties]);

  return (
    <>
      <div className="intro">
        <div className="introTitle">
          <h2>Exclusive apartments & penthouses</h2>
        </div>
        <div className="introDesc">
          <p>
            The best selection of luxury and modern apartments & penthouses
            located in a fascinating location. Our portfolio includes the finest
            selection of modern-style and contemporary apartments with
            up-to-date facilities and placed in desirable locations, close to
            the beach.
          </p>
        </div>
      </div>
      <>
        {properties.map((d, index) => (
          <div key={index} className="properties">
            {d.type === "apartment" && (
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

export default Apartments;
