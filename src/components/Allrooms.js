import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import bride from "../images/bride.jpg";
import Room from "./Room";
import Loading from "./Loading";
export default class Allrooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="All bouquets" />

        <div className="featured-rooms-center"></div>
      </section>
    );
  }
}
