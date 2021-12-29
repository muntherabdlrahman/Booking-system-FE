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
        console.log("meetingData",meetingData)
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
                    {/* <select className={styles.field} placeholder='Date' name='meeetingDate' defaultValue='Sunday' onChange={onChangeHandler}>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                    </select> */}
                              <input className={styles.field} type='date' placeholder='date' name='meetingDate' onChange={onChangeHandler} />

                    {/* <select className={styles.field} placeholder='Hour' name='meeetingHour' defaultValue='4 PM' onChange={onChangeHandler}>
                        <option value='12 PM'>11 AM</option>
                        <option value='1 PM'>12 PM</option>
                        <option value='2 PM'>1 PM</option>
                        <option value='3 PM'>2 PM</option>
                        <option value='4 PM'>3 PM</option>
                        <option value='5 PM'>4 PM</option>
                        <option value='5 PM'>5 PM</option>
                    </select> */}
                              <input className={styles.field} type='text' placeholder='meeting number' name='meetingNumber' onChange={onChangeHandler} />

                    <input className={`${styles.field} ${styles.fieldContent}`} type='text' placeholder='Meeting topic..' name='meetingContent' onChange={onChangeHandler} />
                </div>
                <button className={styles.formbtn}>Submit</button>
            </form>
        </div>
    );
}

export default MeetingForm;