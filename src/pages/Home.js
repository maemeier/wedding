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
          title="Jardin de l'amour"
          subtitle="Find perfect place for your special day"
        >
          <Link to="/places" className="btn-primary">
            our places
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Home;
