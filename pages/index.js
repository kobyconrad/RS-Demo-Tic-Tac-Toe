import RoomService from "@roomservice/browser";
import { useRoomService } from "@roomservice/react";
import React from "react";
import GameBlock from "../components/gameBlock";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [state, setState] = useRoomService(client, "tic-tac-toe-2");

  function onClick(index) {
    setState(state => {
      if (!state.blocks) state.blocks = new Array(9).fill("");

      if (state.turn === "X") {
        state.turn = "O";
      } else {
        state.turn = "X";
      }

      state.blocks[index] = state.turn;
    });
  }

  function reset() {
    setState(state => {
      state.turn = "X";
      state.blocks = new Array(9).fill("");
    });
  }

  // need to combine selection;

  return (
    <div>
      <h1>Collaborative Tic Tac Toe Demo</h1>
      <button onClick={reset}>Reset</button>
      <div>Current Turn = {state.turn}</div>
      <div className="gameContainer">
        <GameBlock
          selection={state.blocks ? state.blocks[0] : ""}
          onClick={() => onClick(0)}
          borderWidth="0px 5px 5px 0px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[1] : ""}
          onClick={() => onClick(1)}
          borderWidth="0px 5px 5px 5px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[2] : ""}
          onClick={() => onClick(2)}
          borderWidth="0px 0px 5px 5px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[3] : ""}
          onClick={() => onClick(3)}
          borderWidth="5px 5px 5px 0px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[4] : ""}
          onClick={() => onClick(4)}
          borderWidth="5px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[5] : ""}
          onClick={() => onClick(5)}
          borderWidth="5px 0px 5px 5px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[6] : ""}
          onClick={() => onClick(6)}
          borderWidth="5px 5px 0px 0px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[7] : ""}
          onClick={() => onClick(7)}
          borderWidth="5px 5px 0px 5px"
        />
        <GameBlock
          selection={state.blocks ? state.blocks[8] : ""}
          onClick={() => onClick(8)}
          borderWidth="5px 0px 0px 5px"
        />
      </div>
      <style jsx>{`
        .gameContainer {
          display: flex;
          flex-wrap: wrap;
          height: 620px;
          width: 620px;
          background-color: red;
        }
      `}</style>
    </div>
  );
};
