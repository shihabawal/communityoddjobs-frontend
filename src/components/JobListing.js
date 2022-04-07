import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import JobListingStyles from "./JobListingStyles";
import { withStyles } from "@material-ui/styles";
import { retrieveJobListing } from "../controllers/UserActions";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

function JobListing(props) {
  const { classes } = props;
  const [isLoading, setLoading] = useState(false);
  const [jobData, setJobData] = useState({});

  retrieveJobListing({}, (data) => {
    setLoading(true);
    debugger;
    if (data.status === 'success') {
      console.log("Retrieval " + data);
      setJobData(data);
    } else {
      console.log("Unexpected error during retrieval");
    }
    setLoading(false);
  }, (err) => {
    console.log("Unexpected error during retrieval");
    setLoading(false);
  });

  useEffect(() => {
    retrieveJobListing();
  }, []);

  return (
    <div className={classes.JobListing}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {jobData && <JobList jobData={jobData} />}
    </div>
  );
}

export default withStyles(JobListingStyles)(JobListing);
