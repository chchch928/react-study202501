import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({item,onDelete}) => {

  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

  const { id, title, done } = item;

  const handleDelete = (e) => {
    onDelete(id);
  }

  return (
    <li className={itemStyle}>
      <div className={checkCircle}>
        {done && <MdDone />}
      </div>
      <span className={text}>{ title }</span>
      <div className={remove}
      onClick={handleDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;