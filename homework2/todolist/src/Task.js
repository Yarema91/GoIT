import React from "react";
import classNames from 'classnames';

function Task( {id, done, text,  onChange, onDelete } ) {
    // const listItemClasses = list-item ${done ? 'list-item_done' : 'list-item'}
    // const listItemClasses = classNames('list-item', { 'list-item_done' : done });
  return (
      <li className={classNames('list-item', { 'list-item_done' : done })}>
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={() => onChange(id)}
          className="list-item__checkbox"
        />
        <span className="list-item__text">{text}</span>
        <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
      </li>
  );
}

export default Task;


