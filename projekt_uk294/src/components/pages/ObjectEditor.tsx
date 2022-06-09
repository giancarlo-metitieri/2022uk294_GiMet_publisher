import {useNavigate, useParams} from "react-router-dom";
import DisplayObject from "./ObjectShower";
import {useEffect} from "react";
import {isLoggedin} from "../../services/Api";
import {AxiosResponse} from "axios";

export default function ObjectEditor() {
    const { id } = useParams();
    let nav = useNavigate()

    return (
        <div>
            <h2>Now showing Publisher</h2>
            <DisplayObject/>
        </div>
    );
}