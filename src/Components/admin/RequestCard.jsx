import React from 'react';
import styles from '../../styles/requests.module.css';
function RequestCard({ allMeeting, rejectHandler, solveHandler }) {
  return (
    <>
      {allMeeting.map((comp) => (
        <div key={comp.meeting_id} className={styles.card}>
          <section className={styles.customerInfo}>
            <h3 className={styles.custTitle}>Customer Information:</h3>
            <div className={styles.nameDiv}>
              <p className={styles.field}>
                Name: <span className={styles.data}>{comp.customer_username}</span>
              </p>
              <span></span>

              <p className={styles.field}>
                position: <span className={styles.data}>{comp.customer_position}</span>
              </p>
            </div>
            <p className={`${styles.email} ${styles.field}`}>
              email: <span className={styles.data}>{comp.customer_email}</span>
            </p>
          </section>
          <section className={styles.meetingInfo}>
            <h3 className={styles.custTitle}>Meeting  Information:</h3>
            <div className={styles.nameDiv}>
              <p className={styles.field}>
                ID: <span className={styles.data}>{comp.meeting_id}</span>
              </p>
              <span></span>
              <p className={styles.field}>
                Type: <span className={styles.data}>{comp.meeting_type}</span>
              </p>
            </div>
            <div className={styles.nameDiv}>
              <p className={styles.field}>
                Date: <span className={styles.data}>{comp.meeting_date}</span>
              </p>
              <span></span>

              <p className={styles.field}>
                Hour date: <span className={styles.data}>{comp.meeting_number}</span>
              </p>
            </div>
            <p className={`${styles.content} ${styles.field}`}>
              Topic: <span className={styles.data}>"{comp.meeting_content}."</span>
            </p>
          </section>
          <p className={`${styles.status} ${styles.field}`}>
            Status:{' '}
            <span
              className={`${styles.data} ${comp.meeting_status === 'Agreed' ? styles.solved : styles.rr} ${comp.meeting_status === 'Rejected' ? styles.rejected : styles.rr} ${comp.meeting_status === 'Pending' ? styles.pending : styles.rr
                }`}
            >
              {comp.meeting_status}
            </span>
          </p>
          <section className={styles.btnContainer}>
            <button className={styles.button} onClick={() => solveHandler(comp._id)}>
              Agree
            </button>
            <button className={styles.button} onClick={() => rejectHandler(comp._id)}>
              Reject
            </button>
          </section>
        </div>
      ))}
    </>
  );
}

export default RequestCard;