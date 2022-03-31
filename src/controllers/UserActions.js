import env from "react-dotenv";
import Axios from "axios";

export const userLogin = (email, password, callback, error) => {
    Axios({
        method: "POST",
        url: env.REACT_APP_API_URL + "/user/login",
        data: {
            email,
            password
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }).then(response => {
        if (response.status && response.status === 200) {
            callback && callback(response.data);
        }
    }).catch((err) => {
        error && error(err)
    })
}

export const saveUser = (payload, callback, error) => {
    console.log('payload', payload)
    Axios({
        method: "post",
        url: env.REACT_APP_API_URL + "/user/create",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        data: payload
    }).then(response => {
        if (response.status && response.status === 200) {
            callback && callback(response.data);
        }
    }).catch((err) => {
        error && error(err)
    })
}

