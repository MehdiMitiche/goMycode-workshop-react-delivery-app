import React from "react";
import "./vehiculeCard.css";
import { Radio } from "antd";

const VehiculeCard = () => {
  const radioStyle = {
    display: "block",
    height: "70px",
    fontSize: 18,
  };
  return (
    <>
      <Radio.Group size="large" style={{ width: "100%" }}>
        <Radio style={radioStyle} value={1}>
          <span>Bike</span>
        </Radio>
        <Radio style={radioStyle} value={2}>
          MotorBike
        </Radio>
        <Radio style={radioStyle} value={3}>
          Car
        </Radio>
        <Radio style={radioStyle} value={4}>
          MotorBike XL
        </Radio>
      </Radio.Group>
    </>
  );
};

export default VehiculeCard;
