import React from "react";
import Hero from "../../components/hero/Hero";
import PropertyGroup from "../../components/propertyGroup/PropertyGroup";
import Search from "../../components/search/Search";
import Services from "../../components/services/Services";
import Testimonials from "../../components/testimonials/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <Search />
      <PropertyGroup />
      <Testimonials />
    </div>
  );
};

export default Home;
