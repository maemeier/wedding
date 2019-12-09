import React, { Component } from "react";

import { GiFlowerPot } from "react-icons/gi";
import { GiFlowers } from "react-icons/gi";

import { MdStore } from "react-icons/md";
import Titel from "./Title";

class Services extends Component {
  state = {
    services: [
      {
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
      },
      {
        icon: <GiFlowers />,
        title: "WEDDING DECORATIONS",
        info:
          "Choose from: Table garland, Gazebo flowers, wedding arch flowers, venue floral decor, bouquets, centerpieces and so much more!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Titel title="Exclusive services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
