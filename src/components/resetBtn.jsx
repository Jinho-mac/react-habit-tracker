import React from 'react';

const ResetBtn = props => {
  return (
    <button className="reset-btn" onClick={props.onReset}>
      reset
    </button>
  )
};

export default ResetBtn;