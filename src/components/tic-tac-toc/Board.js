import React from 'react'
import Square from "../tic-tac-toc/Square"
import "../tic-tac-toc/Game.css"

const style = {
  paddingTop:'10px',
  paddingLeft:'10px',
  border: '4px solid rgb(73, 3, 42)',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};


const Board=({squares,onClick})=>{
 
    return (
      <div style={style}>
     { squares.map((square,i)=>(
      <Square 
        key={i}  value={square}  onClick={() => onClick(i)}/>)
      )}
      </div>
    );
  }

 export default Board;