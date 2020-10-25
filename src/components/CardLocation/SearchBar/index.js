import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = ({ onChangeAddress }) => {
  return (
    <Search
      size="large"
      style={{ borderRadius: 3 }}
      placeholder="Search for Address"
      onChange={(e) => onChangeAddress(e.target.value)}
    />
  );
};

export default SearchBar;
