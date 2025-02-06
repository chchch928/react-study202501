import React from 'react';
import styles from './scss/TodoMain.module.scss';
import TodoItem from "./TodoItem.jsx";


const TodoMain = ({items}) => {
  return (
    <ul className={styles['todo-list']}>
      {
        items.map(item => <TodoItem key={item.id} item={item} />)
      }

    </ul>
  );
};

export default TodoMain;