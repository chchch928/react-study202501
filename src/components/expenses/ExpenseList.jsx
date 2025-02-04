import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpenseFilter from "./ExpenseFilter.jsx";

const ExpenseList = ({ expenses }) => {

  const onChangeYear = (newYearInput) =>{
    console.log('상향식데이터 전달용 함수')


  }

  //ExpenseFilter에서 선택한 연도값을 여기서 출력
  console.log('필터연도값을 출력')
    return (
        <div className='expenses'>
            <ExpenseFilter onChange = {onChangeYear} />
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
        </div>
    );
};

export default ExpenseList;