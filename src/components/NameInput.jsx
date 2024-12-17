import React from "react";

const NameInput = ({ userName, setUserName }) => (
  <div className="name-input-container">
    <label htmlFor="username">Enter your name: </label>
    <input
      id="username"
      type="text"
      placeholder="Enter your name"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className="username-input"
    />
  </div>
);

export default NameInput;
