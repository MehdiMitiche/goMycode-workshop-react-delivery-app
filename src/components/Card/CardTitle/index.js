import React from "react";
import "./cardTitle.css";

const CardTitle = ({ title, icon }) => {
  return (
    <>
      <div className="title-icon">{icon}</div>
      <div className="title">{title}</div>
    </>
  );
};

export default CardTitle;
