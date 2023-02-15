import React, { useState } from 'react'
import './Board.css';
import Square from '../Square/Square';

const Board = () => {

  // Maintaince the state variable of a component that may be updated at any point.
  // It is an array with an InitialState as the first element and a set function as the second element.
  // We destructure the array to obtain the two element separately
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(8).fill(null));

   function handleClick(i){
    let newSquare = squares.slice();
    if(squares[i] || calculateWinner(squares)){
      return
    }
    if(isNext){
      newSquare[i] = "X"
    }
    else{
      newSquare[i] = "O"
    }
    setSquares(newSquare);
    setIsNext(!isNext);
   }

   const winner = calculateWinner(squares);
   let status;
   if(winner){
    status = 'Winner ' + winner;
   }else{
    status = "Next Player "+ (isNext? "X" : "O");
   }

  return (
    <div className='board'> 
     <div className='status'>
      {status}
     </div>
      <div className="column1">
        <Square value = {squares[0]} handleClick={()=>handleClick(0)}/>
        <Square value = {squares[1]} handleClick={()=>handleClick(1)}/>
        <Square value = {squares[2]} handleClick={()=>handleClick(2)}/>
      </div>
      <div className="column2">
        <Square value = {squares[3]} handleClick={()=>handleClick(3)}/>
        <Square value = {squares[4]} handleClick={()=>handleClick(4)}/>
        <Square value = {squares[5]} handleClick={()=>handleClick(5)}/>
      </div>
      <div className="column3">
        <Square value = {squares[6]} handleClick={()=>handleClick(6)}/>
        <Square value = {squares[7]} handleClick={()=>handleClick(7)}/>
        <Square value = {squares[8]} handleClick={()=>handleClick(8)}/>
      </div>
    </div>
  );

  function calculateWinner(squares){
    let winningPossibleMove = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i < winningPossibleMove.length;i++){
      let [a,b,c] = winningPossibleMove[i];
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
}

export default Board;