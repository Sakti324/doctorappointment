import React, { useState } from "react";

const states = [
  {
    name: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Thane"]
  },
  {
    name: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Trichy"]
  },
  {
    name: "Karnataka",
    cities: ["Bangalore", "Mysore", "Belgaum", "Hubli"]
  }
];

function StateCitySelector() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const stateOptions = states.map(state => (
    <option key={state.name} value={state.name}>
      {state.name}
    </option>
  ));

  let cityOptions = [];
  if (selectedState) {
    const state = states.find(s => s.name === selectedState);
    cityOptions = state.cities.map(city => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  }

  return (
    <div className="flex flex-row justify-evenly gap-2 w-1/2">
        <div className=" ">
        <select
            value={selectedState || ""}
            onChange={e => setSelectedState(e.target.value)}
        >
            <option value="" disabled>
            Select State
            </option>
            {stateOptions}
        </select>
        </div>
        <div>
        <select
            value={selectedCity || ""}
            onChange={e => setSelectedCity(e.target.value)}
            disabled={!selectedState}
        >
            <option value="" disabled>
            Select City
            </option>
            {cityOptions}
        </select>
        </div>
    </div>
  );
}

export default StateCitySelector;
