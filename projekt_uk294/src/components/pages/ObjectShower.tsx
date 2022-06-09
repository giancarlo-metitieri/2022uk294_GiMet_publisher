import {fetchCurrentLoginState, isLoggedin} from "../../services/Api";
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {PublisherComponent} from '../atoms/PublisherComponent'
import './ObjectShower.css'


import {json} from "stream/consumers";
import internal from "stream";
import GoToDetailsButton from "../atoms/GoToDetailsButton";
import DeleteButton from "../atoms/DeleteButton";
type publisherType = {
    id: Number
    publisher_name: String
    incorporation_date: Date
}
export default function DisplayObject() {
    let {id} = useParams()
    const u = useNavigate()
    const [receivedData, setReceivedData] = useState<publisherType[]>();
    useEffect(function () {
            isLoggedin.then(reason => {
                let returnedJSON = reason as AxiosResponse
                setReceivedData(returnedJSON.data)
                }
            ).catch(() => {
                u('/login')
            })
        }, [u])


    if (id) {
        let publisherToDisplay = receivedData?.at(Number(id)-1);
        return (<PublisherComponent id={publisherToDisplay?.id.toFixed()} publisher_name={publisherToDisplay?.publisher_name} incorporation_date={publisherToDisplay?.incorporation_date}/>);

    }
    return (
        <section>

            {receivedData?.map(({id, publisher_name, incorporation_date}) => (
                <div className={"Publisher"}>
                    <PublisherComponent key={id} id={id} publisher_name={publisher_name} incorporation_date={incorporation_date}/>
                    <GoToDetailsButton id={id}/>

                    <hr/>

                    <DeleteButton id={id}/>

                </div>
            ))
            }


        </section>)

};