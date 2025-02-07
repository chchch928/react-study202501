import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({item,onDelete,onCheck}) => {

  const { text,
    remove,
    'todo-list-item': itemStyle,
    'check-circle': checkCircle,
    active,
    finish
  } = styles;

  const { id, title, done } = item;

  const handleDelete = (e) => {
    onDelete(id);
  }

  return (
    <li className={itemStyle}>
      <div className={`${checkCircle} ${done ? active : ''} `} onClick={e => onCheck(id)}>
        {done && <MdDone />}
      </div>
      <span className={`${text} ${done ? finish : '' }`}>{ title }</span>
      <div className={remove}
      onClick={handleDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;