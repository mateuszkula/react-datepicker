import React from "react";
import "./css/MonthView.css";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const emptyDayBox = "MonthView_day_box";
const day = "MonthView_day_box MonthView_day_non_empty";

const MonthView = ({ firstDayOfMonth, numberOfDaysInMonth }) => {
  let monthArray = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    monthArray.push(<div className={emptyDayBox} />);
  }

  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    monthArray.push(<div className={day}>{i}</div>);
  }

  return (
    <div>
      <div className="MonthView">
        <div className="MonthView_nameOfDays">
          {daysOfWeek.map(item => {
            return <div className="MonthView_nameOfDay">{item}</div>;
          })}
        </div>
      </div>
      <div className="MonthView">{[...monthArray]}</div>
    </div>
  );
};

export default MonthView;
