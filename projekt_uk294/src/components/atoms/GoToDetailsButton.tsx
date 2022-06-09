
import {useNavigate} from "react-router-dom";

export default function GoToDetailsButton(props: any) {
    let nav = useNavigate()
    return (<div><button onClick={()=>nav(props.id + "/")} >Details</button></div>)
}