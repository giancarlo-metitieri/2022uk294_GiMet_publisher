import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {addDBVal, updateDBVal} from "../../services/UpdateService";
import {checkIfIdExists} from "../../services/Api";

export default function NewObjectForm() {
    let [pubId, setPubId] = useState<string>("")
    let [pubNam, setPubNam] = useState<string>("")
    let [incDat, setIncDat] = useState<string>("")
    let [sendAvailable, setSendAvailable] = useState<boolean>(false)
    let nav = useNavigate()
        return (
            <div>
                <form>
                    <label>Publisher Id: </label><input type={"text"}
                                                          onChange={(e) => {
                                                              checkIfIdExists(e.target.value).then(value => {
                                                                            setSendAvailable(value)
                                                                  }
                                                              )

                                                          }}/><br/>
                    <label>Publisher Name: </label><input type={"text"}
                                                          onChange={(e) => {
                                                              setPubNam(e.target.value)
                                                          }}/><br/>

                    <label>Incorporation Date: </label><input type={"date"}
                                                              onChange={(e) => {
                                                                  setIncDat(e.target.value)
                                                              }}/>
                    <button disabled={sendAvailable} onClick={() => {
                        addDBVal(pubId, pubNam, incDat).then(() => {nav('/publisher')})
                    }}>Save
                    </button>
                </form>
            </div>
        )
}