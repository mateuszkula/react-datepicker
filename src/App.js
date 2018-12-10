import React, { Component } from "react";
import ReservationWidget from './components/resevationWidget/ReservationWidget';

const data = {
  price: "223 pln",
  numberOfRatings: "123",
  rating: "4.5",
  bookedDates: [
    "15.12.2018",
    "16.12.2018",
    "24.12.2018",
    "25.15.2018",
    "26.15.2018"
  ]
}


class App extends Component {
  render() {
    return (
      <ReservationWidget 
       {...data}
      /> 
    );
  }
}

export default App;
