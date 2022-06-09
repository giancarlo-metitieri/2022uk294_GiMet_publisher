import axios, { AxiosInstance } from "axios";
import { getMaxListeners } from "process";
import { currentUserObject } from "./AuthService";
import { setCurrentUser } from "./AuthService"
import {resolve} from "dns/promises";
import {useNavigate} from "react-router-dom";

export const BASE_URL: string = "http://localhost:3000"

export const defaultAxiosInstance: AxiosInstance = axios.create(
    {
        baseURL: BASE_URL
    }
)
defaultAxiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {

    return Promise.reject(error);
});
export async function signup(email: string, password: string){
    const data = await defaultAxiosInstance.post('signup',
    {
        email: email,
        password: password
    } )
    let returnJSON = data.data
    setCurrentUser(returnJSON['user']['email'], returnJSON['accessToken'])
}
export async function login(email: string, password: string){
    const data = await defaultAxiosInstance.post('login',
    {
        email: email,
        password: password
    } )

    let returnJSON = data.data
    setCurrentUser(returnJSON['user']['email'], returnJSON['accessToken'])
}
export const config = {
    headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
};
export async function fetchCurrentLoginState(){
    let getCurrentLogin: boolean = false;
    await defaultAxiosInstance.get('publisher', config).then((r) => {Promise.resolve(r.data)}).catch((r) => {Promise.reject()})
    return getCurrentLogin;
}
export let isLoggedin = new Promise((resolve, reject) => {

    defaultAxiosInstance.get('publisher', config).then(value => {return resolve(value)}).catch(() => { return reject(null)});

})
export async function checkIfIdExists(id: string) {
    let data = true;
    if (!(/^\d+$/.test(id))) {
        return true;
    }
    data = await defaultAxiosInstance.get('publisher/' + id, config).then(() => {return true}).catch(() => {return false});
    return data;
}