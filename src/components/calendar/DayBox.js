import React from "react";
import "./css/DayBox.css";

const DayBox = ({ keyId, onClick, onMouseOver, children, state }) => {
  let style = "DayBox";
  style = children ? `${style} DayBox_nonEmpty` : style;
  style = state ? `${style} DayBox_${state.toLowerCase()}` : style;

  return (
    <div key={keyId} onClick={onClick} className={style} onMouseOver={onMouseOver}>
      {children}
    </div>
  );
};

export default DayBox;
