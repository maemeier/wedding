import React from "react";
import FlowerFilter from "./FlowerFilter";
import FlowerList from "./FlowerList";
import { withRoomConsumber } from "../context";
import Loading from "../components/Loading";

const FlowerContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <FlowerFilter rooms={rooms} />
      <FlowerList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumber(FlowerContainer);
