import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  const data = {
    name: "Our Store",
    para: "Our mission is to provide you with a seamless shopping experience by offering a curated selection of high-quality products tailored to suit your lifestyle. We believe in delivering excellence through our premium collection, blending functionality and style effortlessly. From trendsetting designs to timeless classics, we’re dedicated to meeting your everyday needs with products that prioritize both comfort and affordability.",
    image: "./images/about.avif",
  };
  return <HeroSection data={data} />;
};

export default About;
