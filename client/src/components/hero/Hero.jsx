import React, { useState } from "react";
import "./hero.scss";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <div className="hero">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carousel/luxuryinterior.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Modern apartments</h3>
            <p>Great selection of apartments and penthouses.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carousel/luxuryvilla-pool.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Great location</h3>
            <p>Properties placed in the most desirable locations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carousel/luxuryvilla1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Luxury properties</h3>
            <p>Wide range of luxurious villas and apartments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/carousel/modern-villa.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Contemporary style</h3>
            <p>State of art properties with the most fascinating views.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
