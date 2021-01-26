import React, { useRef } from 'react';

const Name = props => {
  
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    props.onSubmit(name);
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="name-form">
        <input type="text" ref={inputRef} placeholder="What's your name?" className="name-input"/>
        <button type="submit" className="name-submit">submit</button>
      </form>
      <span className="hello-name">Hello {props.name} 😀</span>
    </>
  )
};


export default Name;