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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useStyles } from "./CustomStyle";

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
        addressLine: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        workEmail: '',
        contactNumber: ''
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

    const saveUser =async()=> {
        setLoading(true);
        setIsButtonClicked(true);
        if(!formData.name.trim() 
            || !formData.addressLine.trim() || !formData.country.trim() || !formData.state.trim() || !formData.city.trim()
            || !formData.zip.trim() || !formData.workEmail.trim() || !formData.contactNumber.trim()){
            ToastError("Please fill all required fields");
        }else{
            if((formData.workEmail && !emailPattern.test(formData.workEmail))){
                ToastError("Please enter a valid email address");
                return;
            }
            if((formData.contactNumber && (!numberPattern.test(formData.contactNumber) || formData.contactNumber.length != 10))){
                ToastError("Please enter a valid contact number");
                return;
            }

            let payload = {
                "name": formData.name,
                "workEmail": formData.workEmail,
                "contactNmbr": formData.contactNumber,
                "addressLine": formData.addressLine1,
                "city": formData.city,
                "state": formData.state,
                "country": formData.country,
                "zip": formData.zip
            }
            console.log('payload', payload)
            try {
                let config = {
                    method: "post",
                    url: "",
                    headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*",
                     Authorization: "Bearer " + sessionStorage.getItem("idToken"),
                    },
                    data: payload
                  };
               let responseData = await Axios(config);
               console.log(" responseData ", responseData)
                if(responseData.status == 200){
                    setLoading(false);
                    //props.history.push('/Mapping');
                }
              } catch (err) {
                console.log(err);
              }
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
                                    <Grid item xs={12} sm={6} md={5} className={`pd0 txt-left ${isButtonClicked && !formData.companyLegalName.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={(e) => onFormChange("name", e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && (!formData.workEmail || !emailPattern.test(formData.workEmail)) ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Work Email"
                                            value={formData.workEmail}
                                            onChange={(e) => onFormChange("workEmail", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className={`pd0 txt-left ${isButtonClicked && (!formData.contactNumber || !numberPattern.test(formData.contactNumber) || formData.contactNumber.length != 10) ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Contact Number"
                                            value={formData.contactNumber}
                                            onChange={(e) => onFormChange("contactNumber", e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12} md={12} className="pd0" style={{ paddingRight: '0' }}>
                                        <h6 class="txt-left"><strong>Address</strong></h6>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={6} className={`pd0 txt-left ${isButtonClicked && !formData.addressLine1.trim() ? 'requird' : ''}`}>
                                        <BootstrapInput
                                            className="primary-input mb20 width100p"
                                            placeholder="Address Line"
                                            value={formData.addressLine}
                                            onChange={(e) => onFormChange("addressLine", e.target.value)}
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
                                        <button className="btn-primary" onClick={saveUser}>Save</button>
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