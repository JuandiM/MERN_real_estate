import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./singleProperty.scss";
import { villas, apartments } from "../../data";

const SingleProperty = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  const list = [
    { id: "villas", title: "Villas" },
    { id: "apartments", title: "apartments" },
  ];

  useEffect(() => {
    switch (selected) {
      case "villas":
        setData(villas);
        break;
      case "apartments":
        setData(apartments);
        break;
      default:
        setData();
    }
  }, [selected]);

  return (
    <div className="singleProp">
      <div className="hero">
        {data.map((d) => (
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={d.carouselImg.img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={d.carouselImg.img2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={d.carouselImg.img3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/carousel/modern-villa.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}
      </div>
      <div className="propWrap">
        {data.map((d) => (
          <div className="propInfo">
            <h2>{d.title}</h2>
            <div className="propFeat">
              <span>REF: {d.ref}</span>
              <span>{d.features.bedrooms}</span>
              <span>{d.features.bath}</span>
              <span>Build: {d.features.built}</span>
              <span>Terrace: {d.features.terrace}</span>
              <span>Plot: {d.features.plot}</span>
            </div>
            <div className="propDesc">
              <p>{d.description}</p>
            </div>
            <div className="propHigh">
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
            </div>
            <div className="propGallery">
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
              <img src="assets/carousel/luxuryvilla-pool.jpg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProperty;
