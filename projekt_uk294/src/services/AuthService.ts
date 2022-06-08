class currentUser {

    email: string = "";
    jwt: string = "";

    setEmail(data: string) {
        console.log(data)
        window.location.reload();

        localStorage.setItem("email", data)

        this.email = data;
    }
    setJWT(data: string) {
        console.log(data)
        window.location.reload();

        localStorage.setItem("token", data)

        this.jwt = data;
    }
    getEmail() {
        return this.email
    }
    getJWT() {
        return this.jwt
    }
}

export function setCurrentUser(email:string, jwt:string) {
    currentUserObject.setEmail(email)
    currentUserObject.setJWT(jwt)

}

export const currentUserObject: currentUser = new currentUser();

