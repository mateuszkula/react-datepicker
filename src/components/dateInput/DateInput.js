import React from "react";
import "./css/DateInput.css";

const DateInput = ({ expanded, placeholder, onClick, value }) => {
  let isExpanded = expanded ? "DateInput_expanded" : "";
  let classes = `DateInput ${isExpanded}`;
  return (
    <input
      readOnly
      type="text"
      className={classes}
      placeholder={placeholder}
      onClick={onClick}
      value={value}
    />
  );
};

export default DateInput;
