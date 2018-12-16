import React from "react";
import DayBox from "./DayBox";

import "./css/MonthView.css";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const MonthView = ({ firstDayOfMonth, daysInMonth }) => {
  let daysArray = [];
  let keyId = 0;

  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(<DayBox key={keyId++} />);
  }

  daysArray = [
    ...daysArray,
    ...daysInMonth.map(day => {
      return (
        <DayBox
          key={keyId++}
          onClick={day.onClick}
          state={day.state}
          onMouseOver={day.onMouseOver}
        >
          {day.number}
        </DayBox>
      );
    })
  ];

  let daysOfWeekRow = daysOfWeek.map(item => {
    return (
      <div key={item} className="MonthView_nameOfDay">
        {item}
      </div>
    );
  });

  return (
    <div>
      <div className="MonthView">
        <div className="MonthView_nameOfDays">{[...daysOfWeekRow]}</div>
      </div>
      <div className="MonthView">{[...daysArray]}</div>
    </div>
  );
};

export default MonthView;
