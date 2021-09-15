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
    //const newState = [...column];
    if (sourceId === destinationId) {
      const list = column.find((a) => a.id === sourceId);
      const cardDrag = list.card.splice(sourceIndex, 1);
      list.card.splice(destinationIndex, 0, ...cardDrag);
    } else {
      const listSource = column.find((a) => a.id === sourceId);
      const listDestination = column.find((a) => a.id === destinationId);
      const cardDragSource = listSource.card.splice(sourceIndex, 1);
      console.log("fuente :", cardDragSource);
      //listSource.card.splice(destinationIndex, 0, ...cardDragDestination);
      listDestination.card.splice(destinationIndex, 0, ...cardDragSource);
    }
  }

  return (
    <Context.Provider value={{ column, setColumn, draging }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
