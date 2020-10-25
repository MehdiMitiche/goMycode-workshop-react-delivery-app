import React from "react";
import "./cardForm.css";
import { Input } from "antd";
import { Switch } from "antd";

const inputStyle = {
  borderRadius: 4,
  margin: 0,
  borderTopColor: "white",
  borderRightColor: "white",
  borderLeftColor: "white",
  paddingBottom: 5,
  paddingTop: 26,
  fontWeight: 600,
  fontSize: 14,
};

const CardForm = ({ type, onChangeForm }) => {
  return (
    <>
      <div className="row">
        <div className="item">
          <Input
            size="large"
            style={inputStyle}
            placeholder="First Name"
            name="firstName"
            onChange={(e) => onChangeForm(e.target.value, e.target.name)}
          />
        </div>
        <div className="item">
          <Input
            size="large"
            style={inputStyle}
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => onChangeForm(e.target.value, e.target.name)}
          />
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Input
            size="large"
            style={inputStyle}
            name="company"
            placeholder="Company"
            onChange={(e) => onChangeForm(e.target.value, e.target.name)}
          />
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Input
            size="large"
            name="phone"
            style={inputStyle}
            placeholder="Phone Number"
            onChange={(e) => onChangeForm(e.target.value, e.target.name)}
          />
        </div>
        <div className="item">
          <Input
            size="large"
            name="email"
            style={inputStyle}
            placeholder="Email"
            onChange={(e) => onChangeForm(e.target.value, e.target.name)}
          />
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Input
            size="large"
            name="details"
            style={{ ...inputStyle, marginBottom: 20 }}
            placeholder="Add details for the courier (floor number, door, other information, etc.)"
            onChange={(e) => onChangeForm(e.target.value, e.target.name)}
          />
        </div>
      </div>
      {type === "Pick up" ? null : (
        <>
          <div className="order-details">Order Details</div>
          <div className="row">
            <div className="item">
              <Input
                size="large"
                name="orderId"
                style={inputStyle}
                placeholder="Order ID"
                onChange={(e) => onChangeForm(e.target.value, e.target.name)}
              />
            </div>
          </div>
          <div className="row">
            <div className="item">
              <Input
                size="large"
                name="orderInformation"
                style={inputStyle}
                placeholder="Order Information"
                onChange={(e) => onChangeForm(e.target.value, e.target.name)}
              />
            </div>
          </div>
        </>
      )}

      <div className="row switch">
        <div className="item switch">
          <Switch
            size={"small"}
            onChange={(value) => onChangeForm(value, "addressBook")}
          />
        </div>
        <div
          className="item switch"
          style={{ flex: 6, fontWeight: 600, color: "#8e8e8f" }}
        >
          Save to Address book
        </div>
      </div>
    </>
  );
};

export default CardForm;
