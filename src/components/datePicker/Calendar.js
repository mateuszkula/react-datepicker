import React from "react";
import MonthView from "./MonthView";
import MonthPicker from "./MonthPicker";

import "./css/Calendar.css";

const Calendar = ({
  alignment,
  month,
  lastUpdate,
  previousMonth,
  nextMonth,
  numberOfDaysInMonth,
  firstDayOfMonth,
  daysInMonth
}) => {
  return (
    <div>
      <div className="Calendar" style={{ float: alignment }}>
        <MonthPicker
          month={month}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />
        <MonthView
          firstDayOfMonth={firstDayOfMonth}
          numberOfDaysInMonth={numberOfDaysInMonth}
          daysInMonth={daysInMonth}
        />

        <div className="Calendar_bottom_info">
          <p>Minimum stay varies</p>
          <p>Updated {lastUpdate} days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
