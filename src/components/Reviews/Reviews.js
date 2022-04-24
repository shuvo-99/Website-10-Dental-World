import React from "react";
import CardGroup from "../CardGroup/CardGroup";
import reviewInfo from "../hooks/reviewInfo";
import "./Reviews.css";

const Review = () => {
  const [reviewdatas, setreviewdata] = reviewInfo();
  return (
    <div className="reviewContainer">
      {reviewdatas.map((reviewdata) => (
        // console.log(reviewdata)
        <CardGroup key={reviewdata.id} reviewdata={reviewdata}></CardGroup>
      ))}
    </div>
  );
};

export default Review;
