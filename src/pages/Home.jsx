import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import { useProductContext } from "../context/productContext";
import FeatureProduct from "../components/FeatureProduct";

const Home = () => {
  const data = {
    name: "React Ecommerce",
    para: "Discover our wide range of premium products crafted to meet your everyday needs and style. From cutting-edge sneakers to classic formal shoes, our collection is designed with quality, comfort, and affordability in mind. Shop our best-sellers, explore the latest arrivals, or grab exclusive deals on must-have items.",
    image: "./images/hero.jpg",
  };
  return (
    <>
      <HeroSection data={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
