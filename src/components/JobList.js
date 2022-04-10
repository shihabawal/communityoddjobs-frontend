import Job from "./Job";
import JobListStyles from "./JobListStyles";
import { withStyles } from "@material-ui/styles";
import React from "react";

function JobList(props) {
  const classes = withStyles(JobListStyles);

  function renderJob(data) {
    const job = data.data.map((job) => {
      let employerDetails = [job.employerName, job.employerEmail];
      let jobDescription = [job.description, job.dateOfService, job.ratePerHour, job.location];
      return <Job data={job} key={job.title} employerDetails={employerDetails} jobDescription={jobDescription} />;
    });
    return job;
  }
  const displayJob = (jobData) => {
    if (Object.keys(jobData).length == 0) {
      return;
    }
    return renderJob(jobData);
  };

  /************ MAIN COMPONENT RENDER **************/
  return (
    <div className={classes.JobList}>
      {displayJob(props.jobData)}
    </div>
  );
}

export default JobList;
