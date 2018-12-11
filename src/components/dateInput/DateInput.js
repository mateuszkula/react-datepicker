import React from "react";
import "./css/DateInput.css";

const DateInput = props => {
    let expanded = props.expanded ? "DateInput_expanded" : "";
    let classes = `DateInput ${expanded}` 
  return (
    <input
      type="text"
      className={classes}
      placeholder={props.placeholder}
      onClick={props.clicked}
    />
  );
};

export default DateInput;
