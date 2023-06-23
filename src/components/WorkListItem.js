import React, { useContext } from "react";
import moment from "moment";
import { ref, remove } from "firebase/database";
import db from "../firebase/firebase";
import { AuthContext } from "../contextes/AuthContext";

const WorkListItem = ({item}) => {
    const user = useContext(AuthContext);

    let _time = new Date(item.startAt*1000);

    const handleItemRemove = (evt) => {
        if(window.confirm("Will remove this?")) {
            return remove(ref(db,"/worklog_data/" + user.uid + "/" + evt.target.id),() => {
                        console.log('remove');
                    });
        } else {
            return;
        }
    }
    return (
    <li className="list-item"> 
        <div>{ moment(_time).format('DD/MM/YYYY HH:mm ') + ' : ' +  item.message }</div>
        <button className="button" id={item.id} onClick={ handleItemRemove }> x </button>
    </li>    
    )
}

export { WorkListItem as default }