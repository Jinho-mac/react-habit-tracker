import './App.css';
import Habits from './components/habits.jsx';
import React, { useState } from 'react';
import Header from './components/header.jsx';
import HabitAddForm from './components/habitAddForm.jsx';
import ResetBtn from './components/resetBtn.jsx';
import Name from './components/nameAddForm.jsx';

const App = props => {

  const initialHabits = [
    new habitGenerator(1, 'Running'),
    new habitGenerator(2, 'Eating'),
    new habitGenerator(3, 'Reading'),
  ]

  function habitGenerator(id, habit) {
    this.id = id;
    this.habit = habit;
    this.count = 0;
  }

  const [ habits, setHabits ] = useState(initialHabits);
  const [ name, setName ] = useState("");

  const handleIncrement = id => {
    const _habits = habits.map(habit => {
      if (habit.id === id) {
        return { ...habit, count: habit.count + 1 };
      } return habit;
    });
    setHabits(_habits);
  };

  const handleDecrement = id => {
    const _habits = habits.map(habit => {
      if (habit.id === id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } return habit;
    });
    setHabits(_habits);
  };

  const handleDelete = id => {
    const _habits = habits.filter(habit => habit.id !== id);
    setHabits(_habits);
  };

  let totalCount = 0;
  habits.forEach(habit => totalCount += habit.count);

  const handleHabitSubmit = habit => {
    const _habits = [...habits, new habitGenerator(Date.now(), habit)];
    setHabits(_habits);
  };

  const handleReset = () => {
    const _habits = habits.map(habit => {
      return { ...habit, count: 0 }
    });
    setHabits(_habits);
  };

  const handleNameSubmit = name => {
    setName(name);
    const form = document.querySelector(".name-form");
    form.style.display = "none";
    const helloName = document.querySelector(".hello-name");
    helloName.style.display = "inline";
  }

  return ( 
    <>
      <Header count={totalCount}/>
      <Name onSubmit={handleNameSubmit} name={name}/>
      <HabitAddForm onSubmit={handleHabitSubmit}/>
      <Habits 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onDelete={handleDelete}
      habits={habits}
      />
      <ResetBtn onReset={handleReset}/>
    </>
  )

};

export default App;