import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Order from "../components/Order";
import { Link } from "react-router-dom";
import "../App.css";

import Services from "../components/Services";
import FeatureRooms from "../components/FeatureRooms";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Jardin de l'amour" subtitle="Make your wedding unique">
          <Link to="/places" className="btn-primary">
            our flowers
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />

      <Order />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
