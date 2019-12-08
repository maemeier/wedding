import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title="Page not found" subtitle="please go back to homepage">
          <Link to="/" className="btn-primary">
            Homepage
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </div>
  );
};

export default Error;
