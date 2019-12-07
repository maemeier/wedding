import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "../App.css";

import Services from "../components/Services";
import FeatureRooms from "../components/FeatureRooms";
import Button from "../components/StyledHero";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Jardin de l'amour"
          subtitle="Find perfect place for your special day"
        >
          <Link to="/places" className="btn-primary">
            our places
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </React.Fragment>
  );
};

export default Home;
