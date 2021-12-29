import React from 'react';
import styles from '../../styles/meetingCards.module.css';
import { RiDeleteBin2Line } from 'react-icons/ri';

function MeetingCard({ myMeeting, deleteHandler }) {
  return (
    <>
      {myMeeting.map((comp) => (
        <div key={comp.meeting_id} className={styles.card}>
          <section className={styles.firstSection}>
            <span></span>
            <h3 className={styles.idText}>{comp.meeting_id}</h3>
            <span className={styles.delete}>
              <RiDeleteBin2Line onClick={() => deleteHandler(comp._id)} />
            </span>
          </section>
          <section className={styles.secondSection}>
            <h4 className={styles.typeText}>{comp.meeting_type}</h4>
          </section>
          <section className={styles.thirdSection}>
            <div className={styles.contentContainer}>
              <p className={styles.content}>{`"${comp.meeting_content}."`}</p>
            </div>

            <div>
              <p>{comp.meeting_date}</p>
              <p> Date : {comp.meeting_number}</p>
            </div>
            <span
              className={`${styles.status} ${comp.meeting_status == 'Agreed' ? styles.solved : styles.rr} ${comp.meeting_status == 'Rejected' ? styles.rejected : styles.rr} ${
                comp.meeting_status == 'Pending' ? styles.pending : styles.rr
              }`}
            >
              {comp.meeting_status}
            </span>
          </section>
          <section className={styles.fourthSection}></section>
        </div>
      ))}
    </>
  );
}

export default MeetingCard;