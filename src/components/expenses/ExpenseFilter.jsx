import React, {useState} from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

  const changeYearHandler = e => {
    props.onChangeFilter(e.target.value)
  };

  const yearArr = [2019,2020,2021,2022,2023,2024,2025];

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeYearHandler}>

          {yearArr
            .sort((a,b) => b-a)
            .map((yr) => (<option key={yr} value={yr}>{yr}</option>))
          }

        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
