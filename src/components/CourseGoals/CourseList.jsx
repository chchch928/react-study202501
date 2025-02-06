import React from 'react';
import CourseItem from "./CourseItem.jsx";
import styles from './CourseList.module.css';


const CourseList = ({items , onDelete}) => {
  return (
    <ul className={styles['goal-list']}>
      {
        items.map(item => <CourseItem key ={item.id} item = {item} onDelete={onDelete} />)
      }
    </ul>
  );
};

export default CourseList;
