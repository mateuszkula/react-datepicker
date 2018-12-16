import React, { Component } from "react";
import ReservationWidget from "./components/resevationWidget/ReservationWidget";

const data = {
  price: "223 pln",
  numberOfRatings: "123",
  rating: "3.5",
  lastUpdate: "22",
  bookedDates: [
    "10-12-2018",
    "24-12-2018",
    "25-12-2018",
    "26-12-2018"
  ]
};

class App extends Component {
  render() {
    return <ReservationWidget {...data} />;
  }
}

export default App;
