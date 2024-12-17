import React from "react";

const SubmitButton = ({ onSubmit }) => (
  <button onClick={onSubmit} className="submit-btn">
    Submit
  </button>
);

export default SubmitButton;
