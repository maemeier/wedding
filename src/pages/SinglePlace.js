import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import { RoomContext } from "../context";
import { Link } from "react-router-dom";

class SinglePlace extends React.Component {
  constructor(props) {
    console.log("SinglePlace", props);
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }

  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log("getroom", room);
    if (!room) {
      return (
        <>
          <div className="error">
            <h3>Couldn't be found </h3>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </div>
        </>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <>
        <Hero>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </Hero>
      </>
    );
  }
}

export default SinglePlace;
