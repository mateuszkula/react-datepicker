import React from "react";
import "./css/MonthView.css";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const emptyDayBox = "MonthView_day_box";
const dayClass = "MonthView_day_box MonthView_day_non_empty";

const MonthView = ({ firstDayOfMonth, numberOfDaysInMonth, daysInMonth }) => {
  let monthArray = [];
  let keyId = 0;

  for (let i = 0; i < firstDayOfMonth; i++) {
    monthArray.push(<div key={keyId} className={emptyDayBox} />);
    keyId++;
  }

  daysInMonth.map(day => {
    let style = dayClass;
    if (day.state === "BOOKED") {
      style = `${emptyDayBox} MonthView_day_booked`;
    }
    if (day.state === "SELECTED") {
      style = `${emptyDayBox} MonthView_day_selected`;
    }
    monthArray.push(
      <div
        key={keyId}
        onClick={day.onClick}
        className={style}
        onMouseOver={() => {
          console.log("I am over day: " + day.number);
        }}
      >
        {day.number}
      </div>
    );
    keyId++;
  });

  return (
    <div>
      <div className="MonthView">
        <div className="MonthView_nameOfDays">
          {daysOfWeek.map(item => {
            return (
              <div key={item} className="MonthView_nameOfDay">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="MonthView">{[...monthArray]}</div>
    </div>
  );
};

export default MonthView;
