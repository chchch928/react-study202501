import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseItem = ( { expense }) => {

    const {title,price,date} = expense;

    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate = {date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>
        </div>
    );
}

export default ExpenseItem;