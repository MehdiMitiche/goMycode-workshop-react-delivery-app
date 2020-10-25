import React from "react";
import "./deliverySide.css";
import Card from "../Card";
import VehiculeCard from "../VehiculeCard";
import CardLocation from "../CardLocation";
import TimeCard from "../TimeCard";
import SubmitButton from "../SubmitButton";
import { FlagTwoTone, CarTwoTone, CalendarTwoTone } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const DeliverySide = () => {
  const { pickup, dropoff } = useSelector((state) => state.delivery);
  const dispatch = useDispatch();

  return (
    <div className="delivery-side">
      <Card title="Pick Up" icon={<FlagTwoTone twoToneColor="#6C63FF" />}>
        <CardLocation
          showImg={pickup.img}
          onChangeAddress={(value) =>
            dispatch({
              type: "SET_STATE",
              payload: { pickup: { ...pickup, address: value, img: false } },
            })
          }
          onChangeForm={(name, value) =>
            dispatch({
              type: "SET_STATE",
              payload: { pickup: { ...pickup, [`${name}`]: value } },
            })
          }
          type="Pick up"
        />
      </Card>
      <Card title="Drop off" icon={<FlagTwoTone twoToneColor="#00BFA6" />}>
        <CardLocation
          showImg={dropoff.img}
          type="Drop off"
          onChangeAddress={(value) =>
            dispatch({
              type: "SET_STATE",
              payload: { dropoff: { ...dropoff, address: value, img: false } },
            })
          }
          onChangeForm={(value, name) =>
            dispatch({
              type: "SET_STATE",
              payload: { dropoff: { ...dropoff, [`${name}`]: value } },
            })
          }
        />
      </Card>
      <Card
        title="Select a vehicle"
        icon={<CarTwoTone twoToneColor="#6C63FF" />}
      >
        <VehiculeCard />
      </Card>
      <Card
        title="When do you need a courier?"
        icon={<CalendarTwoTone twoToneColor="#00BFA6" />}
      >
        <TimeCard />
      </Card>
      <div className="submit-btn">
        <SubmitButton />
      </div>
    </div>
  );
};

export default DeliverySide;
