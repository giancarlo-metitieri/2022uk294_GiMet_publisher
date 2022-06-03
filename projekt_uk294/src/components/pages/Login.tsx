import { Box, Button, Container } from "@mui/material";
import { fetchJSON, login_e, signup_e, } from "../../services/Api";
import LoginForm from "../molecules/LoginFormik";
import Basic from "../molecules/LoginFormik";

export default function Login() {
    return (
        <Container>
            <button onClick={function(){signup_e("giancarlo.metitieri.01@gmail.com", "123456")}}>signup</button>
            <button onClick={function(){login_e("giancarlo.metitieri.01@gmail.com", "123456")}}>signin</button>
            <button onClick={function(){fetchJSON()}}>FETCH JSON</button>
            <button onClick={function(){localStorage.clear();window.location.reload();}}>DELETE LOCALSTORAGE</button>
            <div>
                <Basic/>
            </div>
            
        </Container>
    )
}