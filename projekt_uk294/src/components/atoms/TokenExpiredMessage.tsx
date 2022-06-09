import CheckIfTokenExpired from "../../services/TokenExpiredChecker";

export default function TokenExpiredMessage() {
    if (localStorage.getItem("token") != null) {
        if (CheckIfTokenExpired()) {
            return (
                <div>
                    Your Session Expired
                </div>)
        } else {
            return (
                <div>
                    You are already logged in.
                </div>)
        }
    } else {
        return (
                <div>
                    You are not logged in
                </div>
        )
    }


}