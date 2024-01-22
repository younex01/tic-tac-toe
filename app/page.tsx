"use client";
import { useEffect, useState } from 'react';
import Cell from './components/cell';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]



export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winning, setWinning] = useState("")

  useEffect(() => {
      winningCombos.forEach((combo) => {
        const circleWins = combo.every((cell) => cells[cell] === "circle")
        const crossleWins = combo.every((cell) => cells[cell] === "cross")

        if(circleWins)
        {
          setWinning("Circle Wins!!")
        }
        else if(crossleWins)
        {
          setWinning("Cross Wins!!")
        }
        
      });
    },[cells]);
  
  useEffect(() => 
  {
    if(cells.every((cell) => cell !== "") && !winning)
    {
      setWinning("Draw!!")
    }
  })
  return (
    <div className='container'>
      <div className='gameboard'>
        {cells.map((cell, index) => (
          <Cell id={index} go={go} setGo={setGo}  key={index} cells={cells} setCells={setCells} cell={cell} winning={winning}/>
        ))}
      </div>
      <div>{winning}</div>
      {!winning && <div>{`its now ${go} turn!`}</div>}
    </div>
  )
}
