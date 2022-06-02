import axios, { AxiosInstance } from "axios";
import { getMaxListeners } from "process";
import { currentUserObject } from "./AuthService";

const BASE_URL: string = "http://localhost:3000"

export const defaultAxiosInstance: AxiosInstance = axios.create(
    {
        baseURL: BASE_URL
    }
)
export async function getJWTToken(){
    const data = await defaultAxiosInstance.post('signup',
    {
        email: "giancarlo.metitieri.16@gmail.com",
        password: "12345678"
    } )
    let returnJSON = data.data
    currentUserObject.setEmail(returnJSON['user']['email'])
    currentUserObject.setJWT(returnJSON['accesstoken'])

    console.log(returnJSON)
    return data;
}
