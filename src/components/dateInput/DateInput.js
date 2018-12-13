import React from "react";
import "./css/DateInput.css";

const DateInput = ({expanded, placeholder, clicked}) => {
    let isExpanded = expanded ? "DateInput_expanded" : "";
    let classes = `DateInput ${isExpanded}` 
  return (
    <input
      type="text"
      className={classes}
      placeholder={placeholder}
      onClick={clicked}
    />
  );
};

export default DateInput;
