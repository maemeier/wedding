import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div>
      <Hero hero="roomsHero1">
        <Banner title="Our Packages">
          <Link to="/" className="btn-primary">
            back to Home
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </div>
  );
};

export default Packages;
