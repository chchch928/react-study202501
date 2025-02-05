import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button.jsx';

const CourseInput = ( {onAdd}) => {

  const [enteredText, setEnteredText] =useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      id:Math.random().toString(),
      text: enteredText
    });

    // 전송이 끝나면 입력창 비우기
    setEnteredText('');


  }

  const handleGoalInput = e =>{
    const inputValue = e.target.value;
    setEnteredText(inputValue);

  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>나의 목표</label>
        <input type='text' onInput={handleGoalInput} value = {enteredText} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;