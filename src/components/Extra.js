import React, { Component } from "react";
import { FaCocktail, FaMitten } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { GiFlowers } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";
import { MdStore } from "react-icons/md";
import bride from "../images/bride.jpg";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        image: <img src={bride} />,
        icon: <MdStore />,
        title: "DREAM CUSTOM BOUQUET",
        info:
          "You send us a photo of a floral piece you love or visit us in store, we will create a custom quote within 1 day, and of course free of charge."
      },
      {
        icon: <GiFlowerPot />,
        title: "FARM FLOWERS",
        info:
          "We receive fresh-cut flowers directly from our growers in order to design the best quality arrangements for your Big Day! "
      }
    ]
  };
  render() {
    return (
      <section className="extra">
        <Title title="Packages" />

        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <>
                <article key={`item-${item.title}`} className="service">
                  <img src={item.image} className="bride" />
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              </>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
