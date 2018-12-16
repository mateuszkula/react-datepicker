import React, { Component } from "react";
import Price from "../price/Price";
import Rating from "../rating/Rating";
import Calendar from "../calendar/Calendar";
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
    this.generateDaysInMonthArray = this.generateDaysInMonthArray.bind(this);
    this.onDateSelect = this.onDateSelect.bind(this);
    this.hoveringOverDate = this.hoveringOverDate.bind(this);
  }

  hoveringOverDate(dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${dayNumber}-${month}-${year}`;
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
    const date = `${day}-${month}-${year}`;
    return this.props.bookedDates.indexOf(date) >= 0 ? "BOOKED" : "";
  }

  isDayInThePast(dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    let today = DateUtil.getAsDateObject();
    let day = DateUtil.getAsDateObject({ year, month, dayNumber });

    return day < today ? "PASTDATE" : "";
  }

  isDayBetweenCheckinAndCheckout(dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    if (this.state.checkinDate !== "" && this.state.checkoutDate !== "") {
      let checkinDate = DateUtil.getStringAsDateObject(this.state.checkinDate);
      let checkoutDate = DateUtil.getStringAsDateObject(
        this.state.checkoutDate
      );

      let date = DateUtil.getStringAsDateObject(
        `${dayNumber}-${month}-${year}`
      );

      if (checkinDate < date && date < checkoutDate) {
        return "BETWEEN";
      }
    }
  }

  compareDatesBetweenSelectedAndHoover(selected, dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    let selectedAsDate = DateUtil.getStringAsDateObject(selected);
    let hoveringOverDate = DateUtil.getStringAsDateObject(
      this.state.hoveringOverDate
    );

    let date = DateUtil.getStringAsDateObject(`${dayNumber}-${month}-${year}`);

    if (selectedAsDate < date && date <= hoveringOverDate) {
      return "BETWEEN";
    }
    if (hoveringOverDate <= date && date < checkin) {
      return "BETWEEN";
    }
  }

  isDayBetweenSelectedDateAndHoover(dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    if (this.state.checkinDate !== "" && this.state.checkoutDate === "") {
      return this.compareDatesBetweenSelectedAndHoover(
        this.state.checkinDate,
        dayNumber
      );
    }
    if (this.state.checkoutDate !== "" && this.state.checkinDate === "") {
      return this.compareDatesBetweenSelectedAndHoover(
        this.state.checkoutDate,
        dayNumber
      );
    }
  }

  isDayAlreadySelected(dayNumber) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${dayNumber}-${month}-${year}`;
    if (date === this.state.checkinDate || date === this.state.checkoutDate) {
      return "SELECTED";
    }
  }

  onDateSelect(dayNumber, checkType) {
    const [month, year] = DateUtil.getMontWithYearAsNumbers(
      this.state.selectedMonth
    );
    const date = `${dayNumber}-${month}-${year}`;

    let expanded = "";
    if (checkType === checkin && this.state.checkoutDate === "") {
      expanded = checkout;
    }
    if (checkType === checkout && this.state.checkinDate === "") {
      expanded = checkin;
    }
    this.setState({
      [checkType + "Date"]: date,
      expanded
    });
  }

  generateDaysInMonthArray() {
    let numberOfDaysInMonth = DateUtil.getNumberOfDaysInMonth(
      this.state.selectedMonth
    );
    let days = [];
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      let day = {};
      day.number = i;
      day.onClick = () => {
        this.onDateSelect(i, this.state.expanded);
      };
      day.onMouseOver = () => {
        this.setState(this.hoveringOverDate(day.number));
      };
      days.push(day);
    }

    days = days.map(item => {
      item.state =
        this.isDayInThePast(item.number) ||
        this.isDayAlreadyBooked(item.number) ||
        this.isDayAlreadySelected(item.number) ||
        this.isDayBetweenCheckinAndCheckout(item.number) ||
        this.isDayBetweenSelectedDateAndHoover(item.number);
      item.onClick = item.state === "BOOKED" ? () => {} : item.onClick;
      item.onClick = item.state === "PASTDATE" ? () => {} : item.onClick;
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
          daysInMonth={this.generateDaysInMonthArray()}
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
