import React from "react";
import MonthView from "./MonthView";
import MonthPicker from "./MonthPicker";

import "./css/Calendar.css";

const Calendar = props => {
  return (
    <div>
      <div className="Calendar_arrow_left" />
      <div className="Calendar">
        <MonthPicker />
        <MonthView />

        <div className="Calendar_bottom_info">
          <p>Minimum stay varies</p>
          <p>Updated 23 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
