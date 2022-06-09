import {useNavigate} from "react-router-dom";

export default function LogOutButton() {
    let nav = useNavigate();
    function logOut() {
        localStorage.clear()
        nav("/");
    }
    return (<button onClick={() =>logOut()} >Log Out</button>)
}