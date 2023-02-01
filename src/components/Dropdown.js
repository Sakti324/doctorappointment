import React, { useState } from "react";

function Dropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <select
      value={selectedOption}
      className="w-64"
      onChange={(event) => setSelectedOption(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option} className="w-24">
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
