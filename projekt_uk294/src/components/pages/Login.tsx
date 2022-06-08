import { Box, Button, Container } from "@mui/material";
import { login, signup, } from "../../services/Api";
import LoginForm from "../molecules/LoginFormik";
import Basic from "../molecules/LoginFormik";
import GoToSignupButton from "../atoms/SignUpPageButton";

export default function LoginPage() {
    return (
        <Container>
            <LoginForm/>
            <br/>
            <GoToSignupButton/>
        </Container>
    )
}