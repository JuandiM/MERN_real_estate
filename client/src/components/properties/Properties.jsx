import React, { useEffect, useState } from "react";
import "./properties.scss";
import PropertyCard from "../propertyCard/PropertyCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../../config";

const Properties = () => {
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
          <h2>Take a look to our exclusive portfolio</h2>
        </div>
        <div className="introDesc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            tempore nesciunt recusandae ullam perspiciatis atque non molestiae
            ex? Sequi molestiae dolor earum odio ex eius ducimus tempore ab qui
            magni.
          </p>
        </div>
      </div>
      <div className="properties">
        <PropertyCard properties={properties} />
      </div>
    </>
  );
};

export default Properties;
