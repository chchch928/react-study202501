import React, {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../ui/Card.jsx";
import log from "eslint-plugin-react/lib/util/log.js";

const ExpenseItem = ( { expense }) => {
    const {title,price,date} = expense;
  // 상태를 처리하는 함수 (hook)
  /*
    useState 훅의 리턴값은 배열이며
    첫번째 요소는 관리할 상태값의 초기값
    두번째 요소는 해당 상태값을 변경할때 사용하는 함수 setter 함수
   */
  let [itemTitle, setItemTitle] = useState(title);
  // console.log('itemTitle:', itemTitle);

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    // 이벤트 핸들러 정의
  function handleClick(e) {
    /*
      리액트는 단순히 변수가 변경된다고 화면의 렌더링을 변경하지 않고
      오로지 상태값의 변경에 의해서만 렌더링을 변경
    */
    setItemTitle ('짜장면');
  }

    return (
      <Card className='expense-item'>
        <ExpenseDate expenseDate={date}/>
        <div className='expense-item__description'>
          <h2>{itemTitle}</h2>
          <div className='expense-item__price'>{formatPrice}원</div>
        </div>
        <button id='btn1' onClick={handleClick}> 수정 </button>

      </Card>
    );
}

export default ExpenseItem;