import React, { Component } from "react";
import Price from "./components/price/Price";
import Calendar from "./components/datePicker/Calendar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Price price="223 zł" />
        <Calendar />
      </div>
    );
  }
}

export default App;
