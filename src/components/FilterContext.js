import React, { useState, createContext } from "react";
import jobData from "./data.json";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [jobFilters, setJobFilters] = useState([]);

  const value = {
    jobData,
    jobFilters,
    setJobFilters,
  };
  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
};
