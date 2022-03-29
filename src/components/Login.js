import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from "@material-ui/lab/Alert";
import logo from "../img/community_odd_jobs.png";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      color: theme.palette.text.secondary,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);
const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {},
  })
)(InputBase);

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("Enter key pressed");
      signInUser();
    }
  };

  const signInUser = () => {
    if (userName === "") {
      setErrorMessage("User Email is required");
      return false;
    }
    if (password === "") {
      setErrorMessage("Password is required");
      return false;
    }

    let data = JSON.stringify({ username: userName, password: password });
    let config = {
      method: "post",
      url: "",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setLoading(true);
  };

  return (
    <div className={classes.root} justify="center" alignItems="center">
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
      <Grid container className="h100" justify="center" alignItems="center">
        <Box component="div" className="signin h100">
          <Box component="div" className="mainlogo">
            <img src={logo} alt="Logo" />
          </Box>
          <Box component="div" boxShadow={3} className="signinbox">
            <Box component="div" className="signinbox-in">
              <div className="alert">
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
              </div>

              <FormControl className="txtform">
                <BootstrapInput
                  className="primary-input mb20"
                  placeholder="User Email"
                  id="bootstrap-input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <BootstrapInput
                  className="primary-input"
                  placeholder="Password"
                  type="password"
                  id="bootstrap-input1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => keyPress(e)}
                />
              </FormControl>
              <Grid container className="pb30 pt30">
                <Grid item xs={12} sm={12} md={12}>
                  <button className="btn-primary" onClick={signInUser}>
                    Sign In
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};
export default Login;

