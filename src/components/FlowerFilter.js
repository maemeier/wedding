import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

// get uique value

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
const FlowerFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    price,
    minPrice,
    maxPrice,
    breakfast,
    pets
  } = context;

  // get Unique type
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search bouquets" />
      <form className="filter-form">
        <div className="form-group">
          <lable htmlFor="type">bouquet type</lable>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* price*/}
        <div className="form-group">
          <lable htmlFor="price">Bouquet price CHF {price}</lable>
          <input
            type="range"
            name="price"
            minPrice={minPrice}
            maxPrice={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
};

export default FlowerFilter;
