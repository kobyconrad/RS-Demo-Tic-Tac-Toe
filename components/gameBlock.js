import React from "react";

function GameBlock(props) {
  return (
    <div onClick={props.onClick}>
      {props.selection}
      <style jsx>{`
        background-color: white;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-color: black;
        border-width: ${props.borderWidth};
        color: black;
        font-size: 100px;
        font-wieght: strong;
        font-family: Arial;
      `}</style>
    </div>
  );
}

export default GameBlock;
