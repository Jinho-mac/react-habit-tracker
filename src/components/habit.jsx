import React from 'react';

const Habit = props => {

  const { id, habit, count } = props.habit;

  const handleIncrement = () =>props.onIncrement(id);
  const handleDecrement = () => props.onDecrement(id);
  const handleDelete = () => props.onDelete(id);

  return (
    <li className="habit-li">
      <span className="habit-name">{habit}</span>
      <span className="habit-count">{count}</span>
      <button className="plus-btn" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="minus-btn" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  )
};

export default Habit;