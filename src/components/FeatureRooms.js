import React, { Component } from "react";
import { RoomContext } from "../Context";

class FeatureRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    console.log(value);
    return <div> HI, This is FeatureRooms {value}</div>;
  }
}

export default FeatureRooms;
