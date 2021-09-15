import React, { useContext } from "react";
import "./App.css";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
import { nanoid } from "nanoid";
import { DragDropContext } from "react-beautiful-dnd";
//import { StateProvider } from "./context/DynamicContext";
import DynamicContext from "./context/DynamicContext";

function App() {
  //STATES
  const { column, setColumn, draging } = useContext(DynamicContext);

  //DEFAULTS FORMS

  //CHANGE STATE
  const handlerColumn = (e) => {
    let model = nanoid();
    setColumn([...column, { title: e, id: model, card: [] }]);
  };

  //DRAG FUNCTIONS
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log("Este es el destino", destination);
    console.log("Esto es el source", source);
    console.log("Esto es el draggable", draggableId);

    const destinationId = destination.droppableId; // el ID de la columan destino
    const destinationIndex = destination.index; // la posición de la columna destino
    const sourceIndex = source.index; // la posición de la columna origen
    const sourceId = source.droppableId; // el ID de la columna origen

    draging(destinationId, destinationIndex, sourceIndex, sourceId);
  };

  //RENDER
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />

        <div className="ColumnContainer">
          {column.map((data) => {
            console.log(data.title);
            return (
              <Column
                key={data.id}
                data={data}
                index={data.index}
                dragFunction={onDragEnd}
              />
            );
          })}
          <Add list={false} doThis={handlerColumn} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
