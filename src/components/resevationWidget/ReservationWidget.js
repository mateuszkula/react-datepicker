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
      hoveringOverDate: "",
      selectedMonth: DateUtil.getCurrentMonthWithYear()
    };

    this.onInputClick = this.onInputClick.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.isDayAlreadyBooked = this.isDayAlreadyBooked.bind(this);
    this.generateDaysStatus = this.generateDaysStatus.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.hoveringOverDate = this.hoveringOverDate.bind(this);
  }

  hoveringOverDate(dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${dayNumber}.${month}.${year}`;
    this.setState({
      hoveringOverDate: date
    });
  }

  previousMonth() {
    this.setState(prevState => {
      return {
        selectedMonth: DateUtil.getAnotherMonth(
          prevState.selectedMonth,
          "previous"
        )
      };
    });
  }
  nextMonth() {
    this.setState(prevState => {
      return {
        selectedMonth: DateUtil.getAnotherMonth(prevState.selectedMonth, "next")
      };
    });
  }

  onInputClick(field) {
    this.setState(prevState => {
      if (field === prevState.expanded) {
        return { expanded: "" };
      }
      return { expanded: field };
    });
  }

  isDayAlreadyBooked(day) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${day}.${month}.${year}`;
    return this.props.bookedDates.indexOf(date) >= 0 ? "BOOKED" : "";
  }

  isDayAlreadySelected(day) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${day}.${month}.${year}`;
    if (date === this.state.checkinDate || date === this.state.checkoutDate) {
      return "SELECTED";
    }
  }

  selectDate(dayNumber, checkType) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${dayNumber}.${month}.${year}`;
    this.setState({
      [checkType + "Date"]: date
    });
  }

  generateDaysStatus() {
    let numberOfDaysInMonth = DateUtil.getNumberOfDaysInMonth(
      this.state.selectedMonth
    );
    let days = [];
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      let day = {};
      day.number = i;
      day.onClick = () => {
        this.selectDate(i, this.state.expanded);
      };
      days.push(day);
    }

    days = days.map(item => {
      item.state =
        this.isDayAlreadyBooked(item.number) ||
        this.isDayAlreadySelected(item.number);
      return item;
    });

    return days;
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
          numberOfDaysInMonth={DateUtil.getNumberOfDaysInMonth(
            this.state.selectedMonth
          )}
          daysInMonth={this.generateDaysStatus()}
          firstDayOfMonth={DateUtil.getFirstDayOfMonth(
            this.state.selectedMonth
          )}
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
                this.onInputClick(checkin);
              }}
            >
              <DateInput
                placeholder="Check In"
                expanded={this.state.expanded === "checkin"}
                value={this.state.checkinDate}
              />
            </span>
            <div className="ReservationWidget_separator" />
            <span
              onClick={() => {
                this.onInputClick(checkout);
              }}
            >
              <DateInput
                placeholder="Check Out"
                expanded={this.state.expanded === "checkout"}
                value={this.state.checkoutDate}
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
