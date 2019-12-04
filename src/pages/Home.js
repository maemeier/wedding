import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Le Grand Catheral"
          subtitle="Luxurious place with Amazing Garden for your special day"
        >
          <Link to="/rooms" className="btn-primary">
            our places
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Home;
