import axios, { AxiosInstance } from "axios";
import { getMaxListeners } from "process";
import { currentUserObject } from "./AuthService";
import { setCurrentUser } from "./AuthService"

const BASE_URL: string = "http://localhost:3000"

export const defaultAxiosInstance: AxiosInstance = axios.create(
    {
        baseURL: BASE_URL
    }
)
async function signup(email: string, password: string){
    const data = await defaultAxiosInstance.post('signup',
    {
        email: email,
        password: password
    } )
    let returnJSON = data.data
    setCurrentUser(returnJSON['user']['email'], returnJSON['accessToken'])
}
async function login(email: string, password: string){
    const data = await defaultAxiosInstance.post('login',
    {
        email: email,
        password: password
    } )
    let returnJSON = data.data
    setCurrentUser(returnJSON['user']['email'], returnJSON['accessToken'])
}
export function signup_e(email: string, password: string) {
    signup(email, password)
}
export function login_e(email: string, password: string) {
    login(email, password)
}
const config = {
    headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
};
export async function fetchJSON(){
    console.log(currentUserObject.jwt)
    const data = await defaultAxiosInstance.get('publisher', config)
    console.log(data['data'])

}