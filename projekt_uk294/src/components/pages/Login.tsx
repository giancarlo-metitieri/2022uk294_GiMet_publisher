import { Box, Button, Container } from "@mui/material";
import LoginForm from "../molecules/LoginFormik";
import GoToSignupButton from "../atoms/SignUpPageButton";
import TokenExpiredMessage from "../atoms/TokenExpiredMessage";

export default function LoginPage() {
    return (
        <Container>
            <LoginForm/>
            <br/>
            <TokenExpiredMessage/>
            <GoToSignupButton/>
        </Container>
    )
}