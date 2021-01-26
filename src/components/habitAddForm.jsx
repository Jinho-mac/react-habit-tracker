import React, { useRef } from 'react';

const HabitAddForm = props => {

  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const habit = inputRef.current.value;
    props.onSubmit(habit); // handleSubmit이 아닌 onSubmit사용하도록 주의!
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="habit-add-form">
      <input ref={inputRef} type="text" placeholder="Input Your Habit" className="habit-add-input"/>
      <button type="submit" className="habit-add-submit">Submit</button>
    </form>
  )
};

export default HabitAddForm;