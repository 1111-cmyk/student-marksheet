import React from "react";

const ResetButton = ({ onReset }) => (
  <button onClick={onReset} className="reset-btn">
    Reset
  </button>
);

export default ResetButton;
