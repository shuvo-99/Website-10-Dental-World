import React from "react";
import "./CardGroup.css";

const CardGroup = (props) => {
  const { reviewdata } = props;
  const { image, name, review, rating } = reviewdata;
  return (
    <div className="reviewInfo">
      <img src={image} alt=""></img>
      <p>{name}</p>
      <p>{review}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default CardGroup;
