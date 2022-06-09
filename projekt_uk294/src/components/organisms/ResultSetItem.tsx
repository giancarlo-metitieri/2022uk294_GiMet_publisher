import {PublisherComponent} from "../atoms/PublisherComponent";
import GoToDetailsButton from "../atoms/GoToDetailsButton";
import DeleteButton from "../atoms/DeleteButton";
import React from "react";

export default function ResultSetItem(props:any) {
    return (
        <div className={"Publisher"} key={props.id.toString()}>
            <PublisherComponent id={props.id} publisher_name={props.publisher_name} incorporation_date={props.incorporation_date}/>
            <GoToDetailsButton id={props.id}/>

            <hr/>

            <DeleteButton id={props.id}/>

        </div>
    )
}