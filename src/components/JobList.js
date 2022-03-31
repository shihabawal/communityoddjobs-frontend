import React, { useContext } from "react";
import { FilterContext } from "./FilterContext";
import Job from "./Job";
import JobListStyles from "./JobListStyles";
import { withStyles } from "@material-ui/styles";

function JobList({ classes }) {
  const { jobData } = useContext(FilterContext);

  function renderJob(data) {
    const job = data.map((job) => {
      let skills = [job.role, job.level, ...job.languages, ...job.tools];
      return <Job data={job} key={job.company} skills={skills} />;
    });
    return job;
  }
  // const renderJob =
  const displayJob = () => {
    debugger;
    console.log("Job Data" + jobData);
    return renderJob(jobData);
  };

  /************ MAIN COMPONENT RENDER **************/
  return (
    <div className={classes.JobList}>
      {/* render filter bar if filters have been selected */}
      {displayJob()}
    </div>
  );
}

export default withStyles(JobListStyles)(JobList);
