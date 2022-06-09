import {useParams} from "react-router-dom";
import DisplayObject from "./ObjectShower";

export default function ObjectEditor() {
    const { id } = useParams();
    return (
        <div>
            <h2>Now showing Publisher</h2>
            <DisplayObject/>
        </div>
    );
}