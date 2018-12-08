import React from "react";
import "./css/MonthView.css";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const MonthView = props => {
  return (
    <div>
    <div className="MonthView">
        <div className="MonthView_nameOfDays">
          {daysOfWeek.map(item => {
            return <div className="MonthView_name">{item}</div>
          })}
        </div>
    </div>
      <div className="MonthView">
        <div className="MonthView_week">
          <div className="MonthView_day">1</div>
          <div className="MonthView_day">2</div>
        </div>
        <div className="MonthView_week">
          <div className="MonthView_day">3</div>
          <div className="MonthView_day">4</div>
          <div className="MonthView_day">5</div>
          <div className="MonthView_day">6</div>
          <div className="MonthView_day">7</div>
          <div className="MonthView_day">8</div>
          <div className="MonthView_day">9</div>
        </div>
        <div className="MonthView_week">
          <div className="MonthView_day">10</div>
          <div className="MonthView_day">11</div>
        </div>
      </div>
    </div>
  );
};

export default MonthView;
