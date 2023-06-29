import React from "react";
import styles from "./Header.module.css";

const Header = ({ todoStatus }) => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = [
    "JAN",
    "FAB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return (
    <div className={styles.TodoTemplate}>
      <div className={styles.app_header}>
        <div className={styles.date_area}>
          <div className={styles.left_col}>
            <div className={styles.day_area}>{day}</div>
          </div>
          <div className={styles.right_col}>
            <div className={styles.month_area}>{month}</div>
            <div className={styles.year_area}>{year}</div>
          </div>
        </div>
        <div className={styles.title}>TODO LIST({todoStatus.todos.length})</div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default Header;
