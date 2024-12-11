import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/index.css'
import { array, func } from 'prop-types'

// function MyButton1() {
//   const [count1,SetCount1] = useState(0)

//   function handleClick1() {
//     SetCount1(count1 + 1)
//   }

//   return(
//     <button onClick={handleClick1}>
//       click {count1} times
//     </button>
//   )
// }

// function MyButton({count ,onClick}) {
//   return(
//     <button onClick={onClick}>
//       click {count} times
//     </button>
//   )
// }

// export default function App() {
//   const [count ,SetCount] = useState(0)

//   function handleClick() {
//     SetCount(count + 1)
//   }

//   return (
//     <div>
//       <h1>welcome to this page</h1>
//       {/* 组件内共享信息 */}
//       <MyButton count={count} onClick={handleClick}/>
//       <MyButton count={count} onClick={handleClick}/>
//       {/* 不共享信息 */}
//       <MyButton1/>
//       <MyButton1/>
//     </div>
//   );
// }

// 井字棋游戏
function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [squareFlag, setSquareFlag] = useState('X');

  function handleClick(i) {
    const newSquares = squares.slice();
    newSquares[i] = squareFlag;
    if (squareFlag === 'X') {
      setSquareFlag('O');
    } else {
      setSquareFlag('X');
    }
    setSquares(newSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Board />
    </div>
  );
}