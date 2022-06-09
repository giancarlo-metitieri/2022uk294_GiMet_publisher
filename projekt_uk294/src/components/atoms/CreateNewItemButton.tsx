import {useNavigate} from "react-router-dom";

export default function CreateNewItemButton() {
    let nav = useNavigate()
    return (<button onClick={() => nav("new/")}>Create New</button>)
}