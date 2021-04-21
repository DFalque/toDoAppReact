import React from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <div className="Card">
      <p>{data.text}</p>
    </div>
  );
};

export default Card;
