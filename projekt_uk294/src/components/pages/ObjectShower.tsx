import {fetchCurrentLoginState, isLoggedin} from "../../services/Api";
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {PublisherComponent} from '../atoms/PublisherComponent'
import './ObjectShower.css'


import {json} from "stream/consumers";
import internal from "stream";
type publisherType = {
    id: Number
    publisher_name: String
    incorporation_date: Date
}
export default function DisplayObject() {
    let {id} = useParams()
    let optionalID=Number(id)
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
                    <PublisherComponent id={id} publisher_name={publisher_name} incorporation_date={incorporation_date}/>
                </div>
            ))
            }


        </section>)

};