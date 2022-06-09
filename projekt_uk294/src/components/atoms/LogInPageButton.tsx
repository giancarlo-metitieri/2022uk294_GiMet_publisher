import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";


export default function GoToLoginButton() {
    const u = useNavigate()

    return (
        <Button onClick={function () {u('/signup')} }>
                Log in
        </Button>
    )
}