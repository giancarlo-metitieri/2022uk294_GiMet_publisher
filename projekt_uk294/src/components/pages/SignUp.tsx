import { Box, Button, Container } from "@mui/material";
import { login, signup, } from "../../services/Api";
import LoginForm from "../molecules/LoginFormik";
import Basic from "../molecules/LoginFormik";
import SignUp from "../molecules/SignUpFormik";

export default function SignUpPage() {
    return (
        <Container>
                <SignUp/>

        </Container>
    )
}