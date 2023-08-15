import React from "react";
import "./Card.css";
import card from "../assets/card.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="img-container">
          <img src={card}></img>
        </div>
        <div className="card-pill">
          <p>100 Follows</p>
        </div>
      </div>
      <p>New English Songs</p>
    </div>
  );
};

export default Card;
