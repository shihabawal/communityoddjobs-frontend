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
            // "Content-Type": "application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Access-Control-Allow-Origin": "*",
            // Authorization: "Bearer " + sessionStorage.getItem("idToken")
        },
    }).then(response => {
        if (response.status && response.status === 200) {
            callback && callback(response.data);
        }
    }).catch((err) => {
        error && error(err)
    })
}

