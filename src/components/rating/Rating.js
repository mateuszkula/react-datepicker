import React from "react";
import "./css/Rating.css";

const stars = "★★★★★";

const Rating = ({ numberOfRatings, rating }) => {
  const overlayWidth = rating * 20;
  return (
    <div className="Rating">
      <span>
        <div className="Rating_stars">
          <div
            className="Rating_stars_color"
            style={{ width: overlayWidth + "%" }}
          >
            {stars}
          </div>
          <div className="Rating_stars_bottom">{stars}</div>
        </div>
        {numberOfRatings}
      </span>
    </div>
  );
};

export default Rating;
