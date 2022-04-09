import React, { useState, useContext } from "react";
import { Divider } from "@material-ui/core";
import JobStyles from "./JobStyles.js";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

function Job(props) {
  const { data, classes } = props;
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    setPageWidth(width);
  });

  /*************** MAIN RENDER ***************/
  return (
    <div className={classes.Job}>
      <div className={classes.company__details}>
        <p>{data.title}</p><br />
        <div className={classes.Job__details}>
          Employer Name: {props.employerDetails[0]}{" "}<br />
          Employer Email: {props.employerDetails[1]}<br />
          <div className={classes.Job__company}>
            Description: {props.jobDescription[0]}{" "}<br />
            Date of Service: {props.jobDescription[1]}{" "}<br />
            Rate Per Hour: {props.jobDescription[2]}{" "}<br />
            Location: {props.jobDescription[3]}
          </div>
        </div>
      </div>

      {pageWidth < 1024 && <Divider className={classes.divider} />}
      <div>
        <Grid container className="pb30 pt30">
          <Grid item xs={12} sm={12} md={12}>
            <button className="btn-primary">Apply</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default withStyles(JobStyles)(Job);
