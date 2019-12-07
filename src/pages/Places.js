import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import { Link } from "react-router-dom";
import FlowerContainer from "../components/FlowerContainer";
const Places = () => {
  return (
    <>
      <div>
        <Hero hero="roomsHero">
          <Banner title="Select the place you love">
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </Hero>
        <FlowerContainer />
      </div>
    </>
  );
};

export default Places;
