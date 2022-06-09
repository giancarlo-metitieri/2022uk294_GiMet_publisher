import {deleteDBVal} from "../../services/UpdateService";

export default function DeleteButton(props:any) {
    return (<button onClick={() => {deleteDBVal(props.id).then(()=>{window.location.reload();
    })}}>Delete</button>)
}