import React from "react";
import "./timeCard.css";
import { Radio } from "antd";
import { FieldTimeOutlined, CalendarOutlined } from "@ant-design/icons";

const TimeCard = () => {
  const radioStyle = {
    fontSize: 17,
    marginRight: 30,
  };
  return (
    <Radio.Group size="large">
      <Radio style={radioStyle} value={1}>
        <span className="time-radio">Now</span>
        <FieldTimeOutlined />
      </Radio>
      <Radio style={radioStyle} value={2}>
        <span className="time-radio">Later</span>
        <CalendarOutlined />
      </Radio>
    </Radio.Group>
  );
};

export default TimeCard;
