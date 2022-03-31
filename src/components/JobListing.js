import React from "react";
import JobList from "./JobList";
import { FilterProvider } from "./FilterContext";
import JobListingStyles from "./JobListingStyles";
import { withStyles } from "@material-ui/styles";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Button,
  Container,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

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
