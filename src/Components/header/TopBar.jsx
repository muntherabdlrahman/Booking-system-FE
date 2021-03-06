import React from 'react';
import styles from '../../styles/topBar.module.css';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import { GrLocation } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { Chip, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import heroImage from '../../images/logo.png';


function TopBar() {
  const history = useHistory();
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.leftSide}>
          <img src={heroImage} alt='' className={styles.img1} />
          <LocalPhoneIcon className={styles.icon} />
          <p className={styles.phone}>+90 122  230166</p>
          <HiOutlineLocationMarker className={styles.icon} />
          <p>mora nash, London, UK</p>
        </div>

        <div className={styles.rightSide}>
          {!isLoggedIn && (
            <button className={styles.button} onClick={() => history.push('/login')}>
              Get Started
            </button>
          )}
          {isLoggedIn && (
            <span className={styles.avatar}>
              <Chip className={styles.avatar} avatar={<Avatar className={styles.avatar}>{user.username.slice(0, 1).toUpperCase()}</Avatar>} label={user.username} />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default TopBar;