import {config, defaultAxiosInstance} from "./Api";

export async function updateDBVal(id: string | undefined, name: string, date: string){
    return (defaultAxiosInstance.put(('publisher/' + id),
        {
            publisher_name: name,
            incorporation_date: date
        }, config))

}

export async function deleteDBVal(id: string){
    return (defaultAxiosInstance.delete(('publisher/' + id), config))

}

export async function addDBVal(id:string, name: string, date: string) {
    return (defaultAxiosInstance.post(('publisher/'),
        {
            id: id,
            publisher_name: name,
            incorporation_date: date
        }, config))

}