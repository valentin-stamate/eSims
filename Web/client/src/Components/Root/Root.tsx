import React from "react";
import {getCookie} from "../../Globals/Cookie";
import { useHistory } from "react-router-dom"

export default function Root() {

    const history = useHistory();
    const redirectToLogin = () => {
        history.push('/login');
    }
    const redirectToHome = () => {
        history.push('/home');
    }

    // TODO check if the user_id is actual valid
    const userId = getCookie('user_id');
    if (userId !== null) {
        redirectToHome();
    } else {
        redirectToLogin();
    }

    return (
        <React.StrictMode />
    );
}
