export function PublisherComponent(props:any) {
    return (
        <div>
            <h2>{props.id}</h2>
            <input type={"text"} value={props.publisher_name}/><br/>

            <input type={"date"} value={props.incorporation_date as string}/>
        </div>
    )
}