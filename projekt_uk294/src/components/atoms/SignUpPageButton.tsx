import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";


export default function GoToSignupButton() {
    const u = useNavigate()

    return (
        <Button onClick={function () {u('/signup')}}>
                Sign Up
        </Button>
    )
}