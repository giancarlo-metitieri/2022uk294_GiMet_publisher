import {useParams} from "react-router-dom";
import {useState} from "react";
import {deleteDBVal, updateDBVal} from "../../services/UpdateService";
import GoToDetailsButton from "./GoToDetailsButton";

export function PublisherComponent(props:any) {
    let { id } = useParams()
    let publisher_id = id;
    let [pubNam, setPubNam] = useState<string>(props.publisher_name)
    let [incDat, setIncDat] = useState<string>(props.publisher_name)

    if (publisher_id) {
        return (
            <div>
                <form>
                <h2>id: {publisher_id}</h2>
                <label>Publisher Name: </label><input type={"text"} defaultValue={props.publisher_name} onChange={(e)=>{setPubNam(e.target.value)}}/><br/>

                <label>Incorporation Date: </label><input type={"date"} defaultValue={props.incorporation_date as string} onChange={(e)=>{setIncDat(e.target.value)}}/>
                <button onClick={() => {updateDBVal(publisher_id, pubNam, incDat).then(value => {console.log(value)})}}>Save</button>
                </form>
            </div>
        )
    }





    return (
        <div>
            <h2>{props.id}</h2>
            <input type={"text"} value={props.publisher_name} onChange={()=>{}} disabled/><br/>

            <input type={"date"} value={props.incorporation_date} onChange={()=>{}} disabled/>


        </div>
    )
}