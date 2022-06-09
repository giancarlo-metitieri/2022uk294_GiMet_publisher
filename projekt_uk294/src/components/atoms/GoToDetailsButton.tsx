
import {useNavigate} from "react-router-dom";

export default function GoToDetailsButton(props: any) {
    let nav = useNavigate()
    return (<div><button onClick={()=>console.log(props.key)} >Details</button></div>)
}