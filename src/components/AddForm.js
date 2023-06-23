import React,{ useContext, useState } from 'react';
import { ref, push } from "firebase/database"
import db from "../firebase/firebase"
import { AuthContext } from "../contextes/AuthContext";

const AddForm = () => {
    const user = useContext(AuthContext);
    //console.log(user);
    let [formData, setFormData] = useState({
        startAt : 0,
        endAt : 0,
        message : '',
        status : 'open'
    });
    
    const add_data = (evt) => {
        evt.preventDefault();
        let timestamp = Math.floor(Date.now() / 1000);
        return push(ref(db, 'worklog_data/' + user.uid), {...formData, startAt : timestamp});
    }
    return (
        <div>
            <form className="form">
                <textarea className="textarea" value={ formData.message } onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                <button className='button button--round--add' onClick={add_data}>+</button>
            </form>
        </div>
    )
}

export { AddForm as default};