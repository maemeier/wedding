import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

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
        <StyledHero img={images[0]}>
          <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              back
            </Link>
          </Banner>
        </StyledHero>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>
              <strong>price</strong> : CHF{price}
            </h6>

            <h6>
              {" "}
              <strong>Delivery</strong> :
              {pets ? "pick up avaliable" : "2 days delivery"}
            </h6>
            <h6>
              <strong>Custom</strong> :{breakfast && "custom possible"}
            </h6>
          </article>
        </div>

        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}> - {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SinglePlace;
