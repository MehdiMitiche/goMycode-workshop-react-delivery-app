import React from "react";
import { Button } from "antd";

const SubmitButton = () => {
  return (
    <Button
      disabled
      size="large"
      style={{ backgroundColor: "#6C63FF", color: "white", margin: 25 }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
