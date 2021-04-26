import React, { useState } from "react";
import { nanoid } from "nanoid";

const Context = React.createContext();

export function StateProvider({ children }) {
  // STATE
  const [column, setColumn] = useState(defaultColumn());

  //DEFAULT
  function defaultColumn() {
    let model = nanoid();
    return [
      {
        title: "Home Task",
        id: model,
        card: [{ id: 0, text: "Esto es una tarjeta" }],
      },
    ];
  }

  //FUNCTION
  function draging(destinationId, destinationIndex, sourceIndex, sourceId) {
    const newState = [...column];
    if (sourceId === destinationId) {
      const list = column.find((a) => a.id === sourceId);
      //  console.log("Esta es la columna que buscamos");
      // console.log(list);
      //  console.log("Esto es la tarjetas que hacemos drag");
      // console.log(sourceIndex);
      // const cardDrag = list.card.slice(sourceIndex, 1);
      // console.log(cardDrag);
      // list.card.slice(destinationIndex, 0, ...cardDrag);
      //console.log(list);
    }
  }

  return (
    <Context.Provider value={{ column, setColumn, draging }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
