import React, { Component } from "react";
import Price from "../price/Price";
import Calendar from "../datePicker/Calendar";
import "./css/ReservationWidget.css";

class ReservationWidget extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ReservationWidget">
        <Price price={this.props.price} />
        
      </div>
    );
  }
}

export default ReservationWidget;
