import { useState } from 'react';

function Square({ value, onSquareClick, rightIds, curSquareId }) {
  // const redBackColor = isRight ? { backgroundColor: 'red' } : {};
  const redBackColor = rightIds.includes(curSquareId) ? { backgroundColor: 'red' } : {};

  // const redBackColor = { backgroundColor: 'red' };
  return (
    <>
      <div className="square" >
        {/* <button onClick={onSquareClick}> */}
        <button className="square" onClick={onSquareClick} style={redBackColor}>
          {value}
        </button>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // setRightIds(lines[i]);
      return squares[a];
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay, rightIds, setRightIds }) {


  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      {/* 当前棋手 */}
      <div className='status'>{status}</div>
      {/* 棋盘 */}
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="board-row">
          {Array.from({ length: 3 }, (_, j) => (
            <Square key={j} value={squares[i * 3 + j]} onSquareClick={() => handleClick(i * 3 + j)} rightIds={rightIds} curSquareId={i * 3 + j} />
          ))}
        </div>
      ))}
    </>
  );

  // return (
  //   <>
  //     <div className="status">{status}</div>
  //     <div className="board-row">
  //       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
  //       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  //       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  //     </div>
  //     <div className="board-row">
  //       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  //       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  //       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  //     </div>
  //     <div className="board-row">
  //       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  //       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  //       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  //     </div>
  //   </>
  // );
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isAscending, setIsAscending] = useState(true);
  const [rightIds, setRightIds] = useState(Array(3).fill(null));

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const changeIsAscending = () => {
    setIsAscending(!isAscending);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // 反转列表
  const displayedMoves = isAscending ? [...moves].reverse() : moves; // 根据状态决定顺序

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} rightIds={rightIds} setRightIds={setRightIds} />
      </div>
      <div className="game-info">
        <button onClick={changeIsAscending}>Change to {isAscending ? 'Ascending' : 'Descending'}</button>
        <ol>{displayedMoves}</ol>
      </div>
    </div>
  );
}




export default function App() {
  return (
    <div>
      <Game />
    </div>
  );
}