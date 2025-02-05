import React from 'react';
import './CourseList.css';
import CourseItem from "./CourseItem.jsx";

const CourseList = () => {
  return (
    <ul className='goal-list'>
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </ul>
  );
};

export default CourseList;
