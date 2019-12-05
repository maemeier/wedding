import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      This is Hero component
      <Hero>
        <Banner title="Page not found" subtitle="please go back to homepage">
          <Link to="/" className="btn-primary">
            Homepage
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Error;
