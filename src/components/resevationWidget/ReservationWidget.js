import React, { Component } from "react";
import Price from "../price/Price";
import Rating from "../rating/Rating";
import Calendar from "../datePicker/Calendar";
import DateInput from "../dateInput/DateInput";

import * as DateUtil from "../../util/DateUtils";

import "./css/ReservationWidget.css";

const checkin = "checkin";
const checkout = "checkout";

class ReservationWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: "",
      checkinDate: "",
      checkoutDate: "",
      selectedMonth: DateUtil.getCurrentMonthWithYear()
    };

    this.clicked = this.clicked.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }

  previousMonth() {
    this.setState((prevState) => {
      return {selectedMonth: DateUtil.getPreviousMonth(prevState.selectedMonth)}
    })
  }
  nextMonth() {
    this.setState((prevState) => {
      return {selectedMonth: DateUtil.getNextMonth(prevState.selectedMonth)}
    })
  }

  clicked(field) {
    this.setState(prevState => {
      if (field === prevState.expanded) {
        return { expanded: "" };
      }
      return { expanded: field };
    });
  }

  showCalendar() {
    if (this.state.expanded !== "") {
      const alignment = this.state.expanded === "checkin" ? "left" : "right";
      return (
        <Calendar
          alignment={alignment}
          month={this.state.selectedMonth}
          lastUpdate={this.props.lastUpdate}
          previousMonth={this.previousMonth}
          nextMonth={this.nextMonth}
          numberOfDaysInMonth={DateUtil.getNumberOfDaysInMonth(this.state.selectedMonth)}
          firstDayOfMonth={DateUtil.getFirstDayOfMonth(this.state.selectedMonth)}
        />
      );
    }
  }

  render() {
    const { price, numberOfRatings, rating } = this.props;
    return (
      <div className="ReservationWidget">
        <Price price={price} />
        <Rating numberOfRatings={numberOfRatings} rating={rating} />

        <div className="ReservationWidget_hr" />

        <div className="ReservationWidget_dates">
          Dates:
          <div className="ReservationWidget_input">
            <span
              onClick={() => {
                this.clicked(checkin);
              }}
            >
              <DateInput
                placeholder="Check In"
                expanded={this.state.expanded === "checkin"}
              />
            </span>
            <div className="ReservationWidget_separator" />
            <span
              onClick={() => {
                this.clicked(checkout);
              }}
            >
              <DateInput
                placeholder="Check Out"
                expanded={this.state.expanded === "checkout"}
              />
            </span>
          </div>
        </div>
        {this.showCalendar()}
      </div>
    );
  }
}

export default ReservationWidget;
