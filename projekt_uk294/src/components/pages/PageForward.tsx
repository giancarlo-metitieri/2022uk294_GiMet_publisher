import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function PageForward() {
    let nav = useNavigate();
    useEffect(() => {
        nav("/publisher")
    }, [nav])
    return (<div>
                <p>Forwarding...</p>
            </div>)
}