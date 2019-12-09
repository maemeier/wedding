import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Services from "../components/Services";

import { Link } from "react-router-dom";
import FlowerContainer from "../components/FlowerContainer";
const Places = () => {
  return (
    <>
      <div>
        <Hero hero="roomsHero">
          <Banner title="Bouquet for you">
            <Link to="/" className="btn-primary">
              back to Home
            </Link>
          </Banner>
        </Hero>
        <FlowerContainer />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default Places;
