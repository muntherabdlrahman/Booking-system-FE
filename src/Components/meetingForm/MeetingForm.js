import { React, useState, useEffect } from 'react';
import styles from '../../styles/meetingForm.module.css';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MeetingForm({ fetchMyMeeting }) {
    const history = useHistory();


    const [meetingData, setMeetingData] = useState({ meetingType: 'One to one meeting' });
    const { isLoggedIn, user } = useSelector((state) => state.authReducer);

    // addmeetingHandler
    async function addMeetingHandler(e) {
        e.preventDefault();
        const response = await axios.post(`http://localhost:8080/meeting`, meetingData, {
            headers: {
                authorization: `Bearer ${user?.token}`,
            },
        });
        e.target.reset();
        fetchMyMeeting();
    }

    // on change handler
    function onChangeHandler(e) {
        setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
        console.log("meetingData", meetingData)
    }
    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={addMeetingHandler}>
                <h2>Meeting Form:</h2>
                <div className={styles.fieldsContainer}>
                    <select className={styles.field} placeholder='Meeting type' name='meetingType' defaultValue='One to one meeting' onChange={onChangeHandler}>
                        <option value='One to one meetings'>One to one meeting</option>
                        <option value='One to many meetings'>One to many meeting</option>
                        <option value='Info-sharing meetings'>Info-sharing meetings</option>
                        <option value='Problem-solving meetings'>Problem-solving meetings</option>
                    </select>
                    <input className={styles.field} type='date' placeholder='date' name='meetingDate' onChange={onChangeHandler} />
                    <input className={styles.field} type='text' placeholder='Time available from 11AM-4PM' name='meetingNumber' onChange={onChangeHandler} />

                    <input className={`${styles.field} ${styles.fieldContent}`} type='text' placeholder='Meeting topic..' name='meetingContent' onChange={onChangeHandler} />
                </div>
                <button className={styles.formbtn}>Submit</button>
            </form>
        </div>
    );
}

export default MeetingForm;