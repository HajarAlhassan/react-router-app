import React,{useState} from 'react'
import Board from "../tic-tac-toc/Board"
import {calculateWinner} from "../tic-tac-toc/helper"
import "../tic-tac-toc/Game.css"

const styles={
  width:'200px',
  margin:'20px auto'
}
const Game=()=> {
  const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setXisNext] = useState(true);
const winner = calculateWinner(board);
 
  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
// const jumpTo=()=>{

// }

const renderMoves=()=>(
 <button  className="mybtn" onClick={()=> setBoard(Array(9).fill(null))}>Start Game</button>
)
return(
<>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</h3>
                {renderMoves()}
            </div>
        </>)
}
export default Game;