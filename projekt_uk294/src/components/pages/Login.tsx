import { Box, Button, Container } from "@mui/material";
import { getJWTToken } from "../../services/Api";

export default function Login() {
    return (
        <Container>
            <button onClick={getJWTToken}>Get JWT</button>
        </Container>
    )
}