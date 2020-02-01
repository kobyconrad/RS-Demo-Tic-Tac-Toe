import RoomService from "@roomservice/browser";
import { useRoomService } from "@roomservice/react";
import React from "react";
import GameBlock from "../components/gameBlock";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [state, setState] = useRoomService(client, "tic-tac-toe");

  function onClick() {
    setDoc(prevDoc => {
      prevDoc.number = Math.floor(Math.random() * 100);
    });
  }

  return (
    <div>
      <h1>Collaborative Tic Tac Toe Demo</h1>
      <div className="gameContainer">
        <GameBlock />
        <GameBlock />
        <GameBlock />
        <GameBlock />
        <GameBlock />
      </div>
      <style jsx>{`
        .gameContainer {
          height: 600px;
          width: 600px;
          background-color: red;
        }
      `}</style>
    </div>
  );
};
