import React, { Component } from "react";
import Price from "../price/Price";
import Rating from "../rating/Rating";
import DateInput from "../dateInput/DateInput";

import "./css/ReservationWidget.css";

const checkin = "checkin";
const checkout = "checkout";

class ReservationWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkinExpanded: false,
      checkoutExpanded: false,
      checkinDate: "",
      checkoutDate: ""
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(field) {
    console.log("I have been clicked + " + field);
    const key = field + "Expanded";
    console.log(key);
    console.log(this.state[key])
    this.setState(prevState => {
      return { [key]: !prevState[key] };
    });
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
                expanded={this.state.checkinExpanded}
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
                expanded={this.state.checkoutExpanded}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationWidget;