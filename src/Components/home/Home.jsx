import React from 'react';
import styles from '../../styles/home.module.css';
import heroImage from '../../images/online-booking-system.jpg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Home() {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <img src={heroImage} alt='' className={styles.img} />
      </div>
      <div className={styles.heroText}>
        <h1>Book an appointment</h1>
        <p>We have the best way to book appointments to serve you and inquire about buying and selling information, book an appointment and agree, welcome</p>

        {!isLoggedIn && (
          <button className={styles.joinBtn} onClick={() => history.push('/login')}>
            Join us
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;