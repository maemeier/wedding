import React, { Component } from "react";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    greeting: "Hello ",
    name: "mae"
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {" "}
        {this.props.children}
        llll
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
