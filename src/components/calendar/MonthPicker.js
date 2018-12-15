import React from "react";
import "./css/MonthPicker.css";

const leftArrow = "←";
const rightArrow = "→";

const MonthPicker = ({ month, previousMonth, nextMonth }) => {
  return (
    <div className="MonthPicker">
      <button
        className="MonthPicker_button"
        onClick={previousMonth}
        type="button"
      >
        {leftArrow}
      </button>
      <span className="MonthPicker_month">{month}</span>
      <button className="MonthPicker_button" type="button" onClick={nextMonth}>
        {rightArrow}
      </button>
    </div>
  );
};

export default MonthPicker;
