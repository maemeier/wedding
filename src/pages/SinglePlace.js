import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import Footer from "../components/Footer";
import { IoIosPricetags } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillCopyrightCircle } from "react-icons/ai";

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
            <Link to="/" className="btn-primary">
              Back to Rooms
            </Link>
          </div>
        </>
      );
    }

    const {
      name,
      description,

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
            <Link to="/places" className="btn-primary">
              back
            </Link>
          </Banner>
        </StyledHero>
        <div className="single-room-info">
          <article className="desc">
            <h3 className="details">details </h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3 className="details">info</h3>
            <h6>
              <IoIosPricetags />
              <strong> price</strong> : CHF{price}
            </h6>

            <h6>
              {" "}
              <MdLocalShipping />
              <strong> Delivery</strong> :
              {pets ? "pick up avaliable" : "2 days delivery"}
            </h6>
            <h6>
              <AiFillCopyrightCircle />
              <strong> Custom</strong> :{breakfast && "custom possible"}
            </h6>
          </article>
        </div>

        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>
                {" "}
                <GoPrimitiveDot /> {item}
              </li>
            ))}
          </ul>
        </section>
        <Footer />
      </>
    );
  }
}

export default SinglePlace;
