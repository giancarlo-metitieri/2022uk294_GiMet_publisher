import GetDataFromLocalJWT from "./GetUserEmail";
import {user} from "../components/atoms/LoggedInAsLabel";

export default function CheckIfTokenExpired(): boolean {
    let currentUser: user;

    if (localStorage.getItem("token") == null) {
        return true
    }
    let token: string = localStorage.getItem("token") as string
    currentUser = GetDataFromLocalJWT(token);
    let currentDate:Date = new Date();
    let expiryDate:Date = new Date(0);
    expiryDate.setUTCSeconds(currentUser.exp)

    console.log(expiryDate.getTime()-currentDate.getTime());
    return expiryDate.getTime() - currentDate.getTime() <= 0;
}