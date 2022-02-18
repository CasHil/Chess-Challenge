import { useState } from "react";
import Chess from "chess.js";
import { Chessboard } from "react-chessboard";
import "./ChallengeChessBoard.css";

export default function ChallengeChessBoard() {
  const [game, setGame] = useState(new Chess());

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
    });
    if (move === null) return false;
    return true;
  }

  return (
    <div className="board">
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
}
