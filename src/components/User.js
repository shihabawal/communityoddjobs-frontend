import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { createStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import logo from "../img/community_odd_jobs.png";
import { ToastError } from "../service/toast/Toast";
import { ToastSuccess } from "../service/toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useStyles } from "./CustomStyle";
import { saveUser } from "../controllers/UserActions";

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

function User(props) {
    const [isLoading, setLoading] = React.useState(false);
    const defaultFormData = {
        name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        email: '',
        contact: ''
    }
    const classes = useStyles();
    const [formData, setFormData] = React.useState(defaultFormData);
    const [isButtonClicked, setIsButtonClicked] = React.useState(false);

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberPattern = new RegExp(/^[0-9\b]+$/);

    const onFormChange = (keyName, keyValue) => {
        const data = { ...formData };
        data[keyName] = keyValue;
        setFormData(data);
    };

    const validateAndSaveUser = () => {
        setLoading(true);
        setIsButtonClicked(true);
        if (!formData.name.trim()
            || !formData.country.trim() || !formData.state.trim() || !formData.city.trim()
            || !formData.zip.trim() || !formData.email.trim() || !formData.password.trim() || !formData.contact.trim()) {
            ToastError("Please fill all required fields");
        } else {
            if ((formData.email && !emailPattern.test(formData.email))) {
                ToastError("Please enter a valid email address");
                return;
            }
            /**if((formData.contact && (!numberPattern.test(formData.contact) || formData.contact.length != 10))){
                ToastError("Please enter a valid contact number");
                return;
            }**/
            let address = {
                "line1": formData.line1,
                "city": formData.city,
                "state": formData.state,
                "country": formData.country,
                "zip": formData.zip
            }
            let payload = {
                "name": formData.name,
                "email": formData.email,
                "password": formData.password,
                "contact": formData.contact,
                "address": address,
            }
            console.log('payload', payload)
            saveUser(payload, (data) => {
                ToastSuccess("User Profile saved successfully");
                setLoading(false);
            }, (err) => {
                ToastError("Unexpected error during User Profile Save");
                setLoading(false);
            });
        }
    }

    return (
        <div className={classes.root} justify="center" alignItems="center"  >
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <ToastContainer />
            <Grid container className="h100" justify="center" alignItems="center">
                <Box component="div" className="signin h100" >
                    <Box component="div" className="mainlogo mr0">
                        <img src={logo} alt="Logo" />
                    </Box>
                    <Box component="div" boxShadow={3} className="signinbox">
                        <Grid container spacing={3} className="mr0">
                            <Grid item xs={12} sm={12}>
                                <h5 className="btitle">Create Individual Profile</h5>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={5} className={`pd0 txt-left ${isButtonClicked}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={(e) => onFormChange("name", e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && (!formData.email || !emailPattern.test(formData.email)) ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Work Email"
                                            value={formData.email}
                                            onChange={(e) => onFormChange("email", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && (!formData.email || !emailPattern.test(formData.email)) ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Password"
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => onFormChange("password", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && (!formData.contact || !numberPattern.test(formData.contact) || formData.contact.length != 10) ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Contact Number"
                                            value={formData.contact}
                                            onChange={(e) => onFormChange("contact", e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12} md={12} className="pd0" style={{ paddingRight: '0' }}>
                                        <h6 class="txt-left"><strong>Address</strong></h6>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={6} className={`pd0 txt-left ${isButtonClicked && !formData.line1.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Address Line"
                                            value={formData.line1}
                                            onChange={(e) => onFormChange("line1", e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && !formData.city.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="City"
                                            value={formData.city}
                                            onChange={(e) => onFormChange("city", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && !formData.state.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="State"
                                            value={formData.state}
                                            onChange={(e) => onFormChange("state", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && !formData.country.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Country"
                                            value={formData.country}
                                            onChange={(e) => onFormChange("country", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2} className={`pd0 txt-left ${isButtonClicked && !formData.zip.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="ZIP/PIN"
                                            value={formData.zip}
                                            onChange={(e) => onFormChange("zip", e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container className="pb30 pt30">
                                    <Grid item xs={12} sm={12} md={12}>
                                        <button className="btn-primary" onClick={validateAndSaveUser}>Save</button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <br /><br />
                </Box>
            </Grid>
        </div>
    );
}

export default User;