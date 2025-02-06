import React, {useRef, useState} from 'react';
import TodoHeader from "./TodoHeader.jsx";
import styles from './scss/TodoTemplate.module.scss'
import TodoMain from "./TodoMain.jsx";
import TodoInput from "./TodoInput.jsx";

const TodoTemplate = () => {

  const [goals,setGoals] = useState([]);

  const onAddGoals = (goal) => {
    setGoals([...goals,goal]);
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader />
      <TodoMain items={goals} />
      <TodoInput onAdd={onAddGoals}/>
    </div>
  );
};

export default TodoTemplate;