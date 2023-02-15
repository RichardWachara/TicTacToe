import React, { useState } from 'react';
import './Square.css';

const Square = (props) => {
  
  return (
    <div className='square'>
      <button className='square__button' onClick={props.handleClick}>{props.value}</button>
    </div>
  )
}

export default Square;