import RoomService from "@roomservice/browser";
import { useRoomService } from "@roomservice/react";
import React from "react";
import GameBlock from "../components/gameBlock";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [state, setState] = useRoomService(client, "tic-tac-toe");

  function onClickOne() {
    setState(state => {
      state.one = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickTwo() {
    setState(state => {
      state.two = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickThree() {
    setState(state => {
      state.three = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickFour() {
    setState(state => {
      state.four = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickFive() {
    setState(state => {
      state.five = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickSix() {
    setState(state => {
      state.six = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickSeven() {
    setState(state => {
      state.seven = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickEight() {
    setState(state => {
      state.eight = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function onClickNine() {
    setState(state => {
      state.nine = state.turn;
    });
    if (state.turn === "X") {
      setState(state => {
        state.turn = "O";
      });
    } else {
      setState(state => {
        state.turn = "X";
      });
    }
  }

  function reset() {
    setState(state => {
      state.one = "";
      state.two = "";
      state.three = "";
      state.four = "";
      state.five = "";
      state.six = "";
      state.seven = "";
      state.eight = "";
      state.nine = "";
    });
  }

  return (
    <div>
      <h1>Collaborative Tic Tac Toe Demo</h1>
      <button onClick={reset}>Reset</button>
      <div>Current Turn = {state.turn}</div>
      <div className="gameContainer">
        <GameBlock
          selection={state.one}
          onClick={onClickOne}
          borderWidth="0px 5px 5px 0px"
        />
        <GameBlock
          selection={state.two}
          onClick={onClickTwo}
          borderWidth="0px 5px 5px 5px"
        />
        <GameBlock
          selection={state.three}
          onClick={onClickThree}
          borderWidth="0px 0px 5px 5px"
        />
        <GameBlock
          selection={state.four}
          onClick={onClickFour}
          borderWidth="5px 5px 5px 0px"
        />
        <GameBlock
          selection={state.five}
          onClick={onClickFive}
          borderWidth="5px"
        />
        <GameBlock
          selection={state.six}
          onClick={onClickSix}
          borderWidth="5px 0px 5px 5px"
        />
        <GameBlock
          selection={state.seven}
          onClick={onClickSeven}
          borderWidth="5px 5px 0px 0px"
        />
        <GameBlock
          selection={state.eight}
          onClick={onClickEight}
          borderWidth="5px 5px 0px 5px"
        />
        <GameBlock
          selection={state.nine}
          onClick={onClickNine}
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

// on click pushes in a state into the component display
// state.turn rotates X or O
