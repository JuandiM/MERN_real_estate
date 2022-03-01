import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./eachProperty.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DeckIcon from "@mui/icons-material/Deck";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import { axiosInstance } from "../../config";

const EachProperty = () => {
  const { property_id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await axiosInstance.get(`/properties/${property_id}`);
      //console.log(response.data);
      setProperty(response.data);
    };
    fetchProperty();
  }, [property_id]);

  return (
    <div className="singleProp">
      <div className="hero">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={property.carouselImg?.img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{property.title}</h3>
              <p>{property.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={property.carouselImg?.img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>{property.title}</h3>
              <p>{property.ref}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={property.carouselImg?.img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>{property.title}</h3>
              <p>{property.features?.bedrooms}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="propWrap">
        <div className="propInfo">
          <h2>{property.title}</h2>
          <hr className="divider" />
          <h3>
            PRICE: <span>{property.price}</span>
          </h3>
          <hr className="divider1" />
          <div className="propFeat">
            <div className="feat-item">
              <span>REF: {property.ref}</span>
            </div>
            <div className="feat-item">
              <HotelIcon />
              <span>{property.features?.bedrooms}</span>
            </div>
            <div className="feat-item">
              <BathtubIcon />
              <span>{property.features?.bath}</span>
            </div>
            <div className="feat-item">
              <HomeIcon />
              <span>{property.features?.built}</span>
            </div>
            <div className="feat-item">
              <DeckIcon />
              <span>{property.features?.terrace}</span>
            </div>
            <div className="feat-item">
              <ApartmentIcon />
              <span>{property.features?.plot}</span>
            </div>
          </div>
          <div className="propDesc">
            <p>{property.description}</p>
          </div>
          {/* <div className="propHigh">
            <ul>
              <li>Sea views</li>
              <li>Huge plot</li>
              <li>Gym</li>
              <li>Sauna</li>
              <li>Floor radiant</li>
              <li>Marble floor</li>
              <li>4 terraces</li>
              <li>Swimming pool</li>
              <li>Cinema</li>
            </ul>
          </div> */}
          <div className="propGallery">
            <img src={property.gallery?.img1} alt="" />
            <img src={property.gallery?.img2} alt="" />
            <img src={property.gallery?.img3} alt="" />
            <img src={property.gallery?.img4} alt="" />
            <img src={property.gallery?.img5} alt="" />
            <img src={property.gallery?.img6} alt="" />
            {/* <img src={property.gallery?.img7} alt="" />
            <img src={property.gallery?.img8} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProperty;
