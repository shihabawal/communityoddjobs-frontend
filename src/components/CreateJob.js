import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { createStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ToastError } from "../service/toast/Toast";
import { ToastSuccess } from "../service/toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useStyles } from "./CustomStyle";
import { saveJobListing } from "../controllers/UserActions";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {},
  })
)(InputBase);

function CreateJob(props) {
  const [isLoading, setLoading] = React.useState(false);
  const defaultFormData = {
    employerName: "",
    employerEmail: "",
    title: "",
    location: "",
    dateOfService: "",
    ratePerHour: "",
    description: "",
  };
  const classes = useStyles();
  const [formData, setFormData] = React.useState(defaultFormData);
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numberPattern = new RegExp(/^[0-9\b]+$/);
  const datePattern = new Date();

  const onFormChange = (keyName, keyValue) => {
    const data = { ...formData };
    data[keyName] = keyValue;
    setFormData(data);
  };

  const validateAndSaveJobListing = () => {
    setLoading(true);
    setIsButtonClicked(true);
    if (
      !formData.employerName.trim() ||
      !formData.employerEmail.trim() ||
      !formData.title.trim() ||
      !formData.location.trim() ||
      !formData.dateOfService.trim() ||
      !formData.ratePerHour.trim() ||
      !formData.description.trim()
    ) {
      ToastError("Please fill all required fields");
      setLoading(false);
    } else {
      if (
        formData.employerEmail &&
        !emailPattern.test(formData.employerEmail)
      ) {
        ToastError("Please enter a valid employerEmail address");
        setLoading(false);
        return;
      }
      /**if((formData.contact && (!numberPattern.test(formData.contact) || formData.contact.length != 10))){
                ToastError("Please enter a valid contact number");
                return;
            }**/
      let payload = {
        adminId: "624606e38d77a630d4c4e8f6", //TODO
        employerName: formData.employerName,
        employerEmail: formData.employerEmail,
        title: formData.title,
        location: formData.location,
        dateOfService: formData.dateOfService,
        ratePerHour: formData.ratePerHour,
        description: formData.description,
      };
      console.log("payload", payload);
      saveJobListing(
        payload,
        (data) => {
          if (data._id) {
            setLoading(false);
            ToastSuccess("Job List saved successfully");
          }
          //ToastError(data);
        },
        (err) => {
          setLoading(false);
          ToastError("Unexpected error during Job List Save");
        }
      );
    }
  };
  const theme = createTheme();
  return (
    <div className={classes.root} justifycontent="center" alignitems="center">
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
      <Grid
        container
        className="h100"
        justifycontent="center"
        alignitems="center"
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Create Job Listing
              </Typography>
              <Box component="form" noValidate sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked && !formData.employerName.trim()
                        ? "requird"
                        : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Employer Name"
                      value={formData.employerName}
                      onChange={(e) =>
                        onFormChange("employerName", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked &&
                      (!formData.employerEmail ||
                        !emailPattern.test(formData.employerEmail))
                        ? "requird"
                        : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Employer Email"
                      value={formData.employerEmail}
                      onChange={(e) =>
                        onFormChange("employerEmail", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked && !formData.title.trim() ? "requird" : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Job Title"
                      value={formData.title}
                      onChange={(e) => onFormChange("title", e.target.value)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked && !formData.location.trim()
                        ? "requird"
                        : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Location"
                      value={formData.location}
                      onChange={(e) => onFormChange("location", e.target.value)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked &&
                      (!formData.dateOfService ||
                        !datePattern.test(formData.dateOfService))
                        ? "requird"
                        : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Date of Service"
                      value={formData.dateOfService}
                      onChange={(e) =>
                        onFormChange("dateOfService", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked &&
                      (!formData.ratePerHour ||
                        !numberPattern.test(formData.ratePerHour) ||
                        formData.ratePerHour.length != 10)
                        ? "requird"
                        : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Rate per hour"
                      value={formData.ratePerHour}
                      onChange={(e) =>
                        onFormChange("ratePerHour", e.target.value)
                      }
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    className={`pd0 txt-left ${
                      isButtonClicked && !formData.description.trim()
                        ? "requird"
                        : ""
                    }`}
                  >
                    <BootstrapInput
                      className="primary-input mb20 width100p"
                      placeholder="Description"
                      value={formData.description}
                      onChange={(e) =>
                        onFormChange("description", e.target.value)
                      }
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid container className="pb30 pt30">
                <Grid item xs={12}>
                  <button
                    className="btn-primary"
                    onClick={validateAndSaveJobListing}
                  >
                    Create
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
        <br />
        <br />
      </Grid>
    </div>
  );
}

export default CreateJob;
