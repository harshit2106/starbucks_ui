import React from "react";

const Cards = ({ heading, description, xtraClass, src, clr }) => {
  return (
    <div className={`card  flex ${clr}`}>
      <img src={src} alt="black" className={xtraClass} />
      <div className="m-left">
        <div className="sub-head bold-text">{heading}</div>
        <div className="xs">{description}</div>
      </div>
    </div>
  );
};

export default Cards;
