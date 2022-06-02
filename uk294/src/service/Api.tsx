import {applyAuthTokenInterceptor, IAuthTokens, TokenRefreshRequest} from "axios-jwt";
import axios, {AxiosInstance} from "axios";
import {useState} from "react";

const BASE_AUTH_URL = `http://localhost:3000`;
export const defaultAxiosAuthInstance: AxiosInstance = axios.create({
    baseURL: BASE_AUTH_URL,
});
const requestRefresh: TokenRefreshRequest = async (
    refreshToken: string
): Promise<IAuthTokens | string> => {
    const response = await axios.post(`${BASE_AUTH_URL}/auth/refresh_token`, {
        token: refreshToken,
    });
    return response.data.access_token;
};
applyAuthTokenInterceptor(defaultAxiosAuthInstance, { requestRefresh });



type publisherJson = {
    id: number
    publisher_name: string
    incorporation_date: Date
}



export default function ObjectGetter() {
    const [jsonObjectArray, setJsonObjectArray] = useState<publisherJson[]>([]);

    async function fetch_data_from_rest() {
        let response = await fetch('http://localhost:3000/publisher',
            {   method:'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({a: 1, b: 'Textual content'})

            });
        let returnedJson = await response.json()
        setJsonObjectArray(returnedJson)
        console.log(returnedJson)
    }
    fetch_data_from_rest()
    return (<div>
        <p>json obj:</p>
    {jsonObjectArray.map(({ id,publisher_name,incorporation_date}) => (
        <div className={"publisher"}>
            <h2>id: {id}</h2>
    <p>name: {publisher_name}</p>
    <p>date: {incorporation_date.getDate()}</p>
    </div>
    ))
    }
    </div>)

}