import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpenseFilter from "./ExpenseFilter.jsx";

const ExpenseList = ({ expenses }) => {

  // 연도를 올리기 위한 함수
  const onFilterChange = (filteredYear) => {
    console.log(`끌어올려진 연도 :${filteredYear}`)
  };

    return (
        <div className='expenses'>
            <ExpenseFilter onChangeFilter = {onFilterChange} />
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
        </div>
    );
};

export default ExpenseList;