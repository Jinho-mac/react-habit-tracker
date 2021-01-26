import React from 'react';
import Habit from './habit.jsx';

const Habits = props => {

  const handleIncrement = id =>props.onIncrement(id);
  const handleDecrement = id => props.onDecrement(id);
  const handleDelete = id => props.onDelete(id);

  return (
    <ul className="habit-ul">
      {props.habits.map(habit => {
        return <Habit
        key={Math.random()}
        habit={habit}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        />
      })}
    </ul>
  )
};

export default Habits;