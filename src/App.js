import "./App.css";
import "./colors.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import JobListing from "./components/JobListing";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
></link>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main" id="page-wrap">
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/Login" component={Login} />
                <Route path="/User" component={User} />
                <Route path="/JobListing" component={JobListing} />
              </Switch>
            </Container>
          </React.Fragment>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
