import React from "react";
import './css/MonthPicker.css';

const leftArrow = "<-";
const rightArrow = "->";

const MonthPicker = () => {
  return (
    <div className="MonthPicker">
      <button className="MonthPicker_button" type="button">{leftArrow}</button>
      <span className="MonthPicker_month">December 2018</span>
      <button className="MonthPicker_button" type="button">{rightArrow}</button>
    </div>
  );
};

export default MonthPicker;
