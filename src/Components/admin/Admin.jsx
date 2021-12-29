import { React, useState, useEffect } from 'react';
import styles from '../../styles/admin.module.css';
import Chart from './Chart';
import RequestCard from './RequestCard';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import cookie from 'react-cookies';
function Admin() {
  const [allMeeting, setAllMeeting] = useState([]);
  const [results, setResults] = useState([0, 0, 0, 0]);

  // fetch complaints
  async function fetchAllMeeting() {
    const token = cookie.load('token');
    const response = await axios.get(`${url}/allMeeting`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log('response.data', response.data);
    setAllMeeting(response.data);

    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].complaint_type == 'One to one meetings') {
        results[0] = results[0] + 1;
      }
      if (response.data[i].complaint_type == 'One to many meetings') {
        results[1] = results[1] + 1;
      }
      if (response.data[i].complaint_type == 'Info-sharing meetings') {
        results[2] = results[2] + 1;
      }
      if (response.data[i].complaint_type == 'Problem-solving meetings') {
        results[3] = results[3] + 1;
      }
    }
  }

  // solve , update status
  async function solveHandler(id) {
    const token = cookie.load('token');
    const response = await axios.put(
      `${url}/meeting/${id}`,//http://localhost:8080
      { status: 'Agreed' },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('response.data', response.data);
    fetchAllMeeting();
  }

  // reject , update status
  async function rejectHandler(id) {
    const token = cookie.load('token');
    const response = await axios.put(
      `${url}/meeting/${id}`,//http://localhost:8080
      { status: 'Rejected' },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('response.data', response.data);
    fetchAllMeeting();
  }

  // did-mount
  useEffect(() => {
    fetchAllMeeting();
  }, []);
  return (
    <div className={styles.bigContainer}>
      <div className={styles.requestsContainer}>
        <RequestCard allMeeting={allMeeting} solveHandler={solveHandler} rejectHandler={rejectHandler} />
      </div>
      <div className={styles.chartContainer}>
        <Chart results={results} />
      </div>
    </div>
  );
}

export default Admin;