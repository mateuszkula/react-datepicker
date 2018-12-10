import React from "react";
import './css/Price.css';

const Price = ({ price }) => {
  return (
    <div className="Price">
        <span className="Price_value">{price}</span> per night
    </div>
  );
};

export default Price;
