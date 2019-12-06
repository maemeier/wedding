import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          <Loading />
        </div>
      </section>
    );
  }
}
