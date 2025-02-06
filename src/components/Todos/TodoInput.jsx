import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';
import styles from './scss/TodoInput.module.scss';

const TodoInput = ( { onAdd }) => {

  const [enteredText,setEnteredText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (enteredText.trim() === '') return; // 빈 값 방지

    const newGoal = {
      id: Math.random(),
      text: enteredText
    };

    onAdd(newGoal);


    setEnteredText('');
  }

  const handleGoalInput = e => {
    const inputValue = e.target.value;
    setEnteredText(inputValue);
  }

  const {
    'form-wrapper': wrapper,
    'insert-form': insertForm,
    'insert-btn': insertBtn,
  } = styles;

  return (
    <>
      <div className={wrapper}>
        <form className={insertForm} onSubmit = {handleSubmit} >
          <input
            type='text'
            onChange= {handleGoalInput}
            value = {enteredText}
            placeholder='할 일을 입력 후, 엔터를 누르세요!'
          />
        </form>
      </div>
      <button className={insertBtn}>
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
