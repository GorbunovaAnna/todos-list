import React from "react";
import { useSelector } from "react-redux";
import { getUserEmail, getIsAuthenticated } from "../../redux/selectors";
import styles from './index.module.css';
import actions from "../../redux/actions/creators";


export const UserInfo = () => {
    const userEmail = useSelector(getUserEmail);
    const { logout } = actions;

    const clickHandler = () => {
        logout();
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.email}>{userEmail}</p>
            <button className={styles.button} onClick={clickHandler}>sign out</button>
        </div>
    )
}