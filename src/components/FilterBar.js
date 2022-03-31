import React, { useContext } from "react";
import { FilterContext } from "./FilterContext";
import FilterBarStyles from "./FilterBarStyles";
import { withStyles } from "@material-ui/styles";

function FilterBar({ classes }) {
  const { jobFilters, removeFilter, clearFilters } = useContext(FilterContext);

  function handleRemove(e) {
    let filterToRemove = e.target.parentElement.dataset.filter;
    removeFilter(filterToRemove);
  }
  return (
    <div className={classes.FilterBar}>
      <div className={classes.filter__wrapper}>
        {jobFilters.map((filter) => (
          <div className={classes.filterTab} key={filter} data-filter={filter}>
            <p className={classes.filter}>{filter}</p>
            <div className={classes.removeFilter} onClick={handleRemove}></div>
          </div>
        ))}
      </div>
      <p
        className={classes.clear}
        onClick={() => {
          clearFilters();
        }}
      >
        Clear
      </p>
    </div>
  );
}

export default withStyles(FilterBarStyles)(FilterBar);
