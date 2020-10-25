import React from "react";
import "./card.css";
import CardTitle from "./CardTitle";

const Card = ({ title, icon, children }) => {
  return (
    <div className="card-container">
      <div className="card-title margin-bottom">
        <CardTitle title={title} icon={icon} />
      </div>
      {children}
    </div>
  );
};
export default Card;
