import React, { useState, useContext } from "react";
import { Divider } from "@material-ui/core";
import JobStyles from "./JobStyles.js";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

function Job(props) {
  const { data, classes, skills } = props;
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    setPageWidth(width);
  });

  /*************** MAIN RENDER ***************/
  return (
    <div className={classes.Job}>
      {/* divide into two parts;
       *Company details
            --logo
            -job details
       *languages and tools */}

      {/* company details */}
      <div className={classes.company__details}>
        <div className={classes.Job__details}>
          <div className={classes.Job__company}>
            <p>{data.company}</p>
            {data.new && <p className={classes.recent}>new</p>}
            {data.featured && (
              <p className={`${classes.recent} ${classes.featured}`}>
                featured
              </p>
            )}
          </div>
          <p className={classes.position}>{data.position}</p>

          <div className={classes.minorDetails}>
            <p>{data.postedAt}</p>
            <p>{data.contract}</p>
            <p>{data.location}</p>
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
      {/* languages and tools */}
      {/**  <div className={classes.skills}>
        {skills.map((skill) => (
          <button onClick={handleFilter} key={skill} data-skill-name={skill}>
            {skill}
          </button>
        ))}
      </div>
    
    */}
    </div>
  );
}
export default withStyles(JobStyles)(Job);
