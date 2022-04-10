import React, { useState, useContext } from "react";
import { Divider } from "@material-ui/core";
import JobStyles from "./JobStyles.js";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { ToastError } from "../service/toast/Toast";
import { ToastSuccess } from "../service/toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { applyJob } from "../controllers/UserActions";

function Job(props) {
  const [isLoading, setLoading] = React.useState(false);
  const { data, classes } = props;
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [applied, setApplied] = useState(false);
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    setPageWidth(width);
  });

  const applyJobOnUserAction = () => {
    setApplied(true);
    let payload = {
      email: "Hemanth@nexturntech.com",
      id: data._id
    };
    applyJob(payload, (data) => {
      if (data.status === 'success') {
        ToastSuccess("Job Applied successfully");
      } else {
        ToastError(data.message);
      }
      setLoading(false);
    }, (err) => {
      ToastError("Unexpected error applying Job");
      setLoading(false);
    });
  };

  /*************** MAIN RENDER ***************/
  return (
    <div className={classes.Job}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
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
            <button className="btn-primary" disabled={applied} onClick={applyJobOnUserAction}>Apply</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default withStyles(JobStyles)(Job);
