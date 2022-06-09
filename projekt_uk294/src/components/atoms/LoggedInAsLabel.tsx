import GetDataFromLocalJWT from "../../services/GetUserEmail";


export type user = {
    email: string,
    exp: number,
    iat: number,
    sub: string
}

export function LoggedInAsLabel() {

    let currentUser: user;

    let token:string;
    token = localStorage.getItem("token") as string
    currentUser = GetDataFromLocalJWT(token);

    return (<div>Logged in as: {currentUser.email.toString()}</div>)

}