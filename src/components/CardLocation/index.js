import React from "react";
import "./cardLocation.css";
import SearchBar from "./SearchBar";
import CardImage from "./CardImage";
import CardForm from "./CardForm";

const CardLocation = ({ type, onChangeForm, onChangeAddress, showImg }) => {
  return (
    <>
      <div className="card-search-bar margin-bottom">
        <SearchBar onChangeAddress={(value) => onChangeAddress(value)} />
      </div>
      {showImg ? (
        <div className="card-img margin-bottom">
          <CardImage />
        </div>
      ) : (
        <div className="card-form margin-bottom">
          <CardForm
            values
            type={type}
            onChangeForm={(value, name) => onChangeForm(value, name)}
          />
        </div>
      )}
    </>
  );
};

export default CardLocation;
