import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import { withStyles } from "@material-ui/styles";
import { retrieveJobListing, searchJob } from "../controllers/UserActions";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./CustomStyle";
import JobListingStyles from "./JobListingStyles";

function JobListing(props) {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [jobData, setJobData] = useState({});

  const retrieveJobListingOnPageLoad = () => {
    retrieveJobListing({}, (data) => {
      setLoading(true);
      if (data.status === 'success') {
        setJobData(data);
      } else {
        console.log("Unexpected error during retrieval");
      }
      setLoading(false);
    }, (err) => {
      console.log("Unexpected error during retrieval");
      setLoading(false);
    });
  }

  const searchJobByTitle = () => {
    setJobData({});
    let payload = {
      searchString: searchString
    };
    searchJob(payload, (data) => {
      setLoading(true);
      if (data.status === 'success') {
        setJobData(data);
      } else {
        console.log("Unexpected error during retrieval");
      }
      setLoading(false);
    }, (err) => {
      console.log("Unexpected error during retrieval");
      setLoading(false);
    });
  }

  useEffect(() => {
    retrieveJobListingOnPageLoad();
  }, []);

  return (
    <div className={classes.JobListing}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <br />
      <Grid container className="pb30 pt30">
        <Grid item xs={12} sm={12} md={12}>
          <button className="btn-primary" onClick={searchJobByTitle}>Search</button>
        </Grid>
        <br />
        <input type="text" value={searchString}
          onChange={(e) => setSearchString(e.target.value)} />
      </Grid>
      {jobData && <JobList jobData={jobData} />}
    </div>
  );
}

export default withStyles(JobListingStyles)(JobListing);
