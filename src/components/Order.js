import React from "react";
import bride from "../images/bride.jpg";
import Allrooms from "../components/FeatureRooms";
import Title from "../components/Title";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <>
      <Title title="Wedding Packages" />
      <div className="services-center">
        <div>
          <img src={bride} alt="bride" className="bride" />
        </div>
        <div>
          <p className="packageText">
            Our signature wedding package, for those who want a romantic and
            private celebration, either alone or with up to 500 guests.Every
            wedding is unique, and so are the requirements of the couples I work
            with. In addition to my comprehensive full wedding planning service,
            I offer a range of a la carte options which can either be taken
            individually, or combined with other services to create your own
            customised wedding package. Guide pricing is included for each
            element, although the final price quoted may be higher or lower
            depending on the level of assistance required in each area, and the
            number of services taken. throughout to help. Perfect for couples
            with a keen eye for detail, requiring a perfectly planned and
            flawlessly executed wedding, with expert assistance on-hand
          </p>

          <Link to="/">
            <button renderAs="button" className="packageButton">
              <span>Packages</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Order;
