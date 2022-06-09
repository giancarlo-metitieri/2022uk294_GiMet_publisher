import {useNavigate} from "react-router-dom";

export default function GoToHomeButton() {
    let nav = useNavigate();
    return (<button onClick={() =>nav("/")}>Go to Home</button>)

}