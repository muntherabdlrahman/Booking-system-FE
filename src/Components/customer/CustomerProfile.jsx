import { React, useState, useEffect } from 'react';
import MeetingCard from './MeetingCard';
import styles from '../../styles/customerProfile.module.css';
import MeetingForm from '../meetingForm/MeetingForm';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import cookie from 'react-cookies';

function CustomerProfile() {
  const [myMeeting, setmyMeeting] = useState([]);
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

  // fetch meetings
  async function fetchMyMeeting() {
    const token = cookie.load('token');
    const response = await axios.get(`${url}/myMeeting`, {//http://localhost:8080
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setmyMeeting(response.data);
  }

  // delete handler
  async function deleteHandler(id) {
    const token = cookie.load('token');
    const response = await axios.delete(`${url}/meeting/${id}`, {//http://localhost:8080
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    fetchMyMeeting();
  }

  // did-mount
  useEffect(() => {
    fetchMyMeeting();
  }, []);
  return (
    <div className={styles.bigContainer}>
      <div className={styles.cardsContainer}>
        <MeetingCard myMeeting={myMeeting} deleteHandler={deleteHandler} />
      </div>
      <div className={styles.meetingForm}>
        <MeetingForm fetchMyMeeting={fetchMyMeeting} />
      </div>
    </div>
  );
}

export default CustomerProfile;