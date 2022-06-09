import NewObjectForm from "../molecules/NewObjectForm";
import GoToHomeButton from "../atoms/GoToHomeButton";

export default function ObjectCreator() {
    return (
        <div>
            <h1>New Object Creator</h1>
            <NewObjectForm/>
            <GoToHomeButton/>
        </div>

    )
}