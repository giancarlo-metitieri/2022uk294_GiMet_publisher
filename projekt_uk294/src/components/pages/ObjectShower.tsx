import {BASE_URL, fetchCurrentLoginState, isLoggedin} from "../../services/Api";
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {PublisherComponent} from '../atoms/PublisherComponent'
import './ObjectShower.css'
import Navbar from "../organisms/Navbar";
import ResultSetItem from "../organisms/ResultSetItem";
import LogOutButton from "../atoms/LogOutButton";

type publisherType = {
    id: Number
    publisher_name: String
    incorporation_date: Date
}
export default function DisplayObject() {
    let {id} = useParams()
    const nav = useNavigate()
    const [defaultData, setDefaultData] = useState<publisherType[]>([])
    const [receivedData, setReceivedData] = useState<publisherType[]>([]);

    useEffect(function () {
        isLoggedin.then(reason => {
                let returnedJSON = reason as AxiosResponse
                setReceivedData(returnedJSON.data)
                setDefaultData(returnedJSON.data)
            }
        ).catch(() => {
            nav("/login");
        })
    }, [nav])


    if (id) {
        let publisherToDisplay = receivedData?.at(Number(id)-1);
        return (<PublisherComponent id={publisherToDisplay?.id.toFixed()} publisher_name={publisherToDisplay?.publisher_name} incorporation_date={publisherToDisplay?.incorporation_date}/>);

    }
    function updateFilter(e: any) {
        let newData: publisherType[] = defaultData.filter(
            function (element) {
                if(!element.publisher_name || !element.incorporation_date || !element.id) return false;

                return (element.publisher_name.toLowerCase().includes(e.target.value.toLowerCase()) || element.id.toString().toLowerCase().includes(e.target.value.toLowerCase()) )
            }
        )
        setReceivedData(newData)
    }


    return (
        <div>
            <Navbar/>

            <div style={{marginTop:150}}>

                <label>Filter </label>
                <input type={"text"} onChange={e => {
                   updateFilter(e)
                }}/> <br/>

            <section style={{marginTop:150}}>
                {receivedData && (receivedData.map(({id, publisher_name, incorporation_date}) => {

                        return (<ResultSetItem id={id} publisher_name={publisher_name} incorporation_date={incorporation_date}/>)

                    }
                )
                )}


            </section>
            </div>
    </div>
)

};