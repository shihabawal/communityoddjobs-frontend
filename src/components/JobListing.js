import React from "react";
import JobList from "./JobList";
import { FilterProvider } from "./FilterContext";
import JobListingStyles from "./JobListingStyles";
import { withStyles } from "@material-ui/styles";

function JobListing(props) {
  const { classes } = props;

  return (
    <div className={classes.JobListing}>
      <FilterProvider>
        <JobList />
      </FilterProvider>
    </div>
  );
}

export default withStyles(JobListingStyles)(JobListing);
