import React, { useState } from "react";
import "./App.css";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
import { nanoid } from "nanoid";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  //STATES
  const [columns, setColumns] = useState(defaultColumn());
  console.log(columns);

  //DEFAULTS FORMS
  function defaultColumn() {
    return [
      {
        title: "Home Task",
        id: 0,
      },
    ];
  }

  //CHANGE STATE
  const handlerColumn = (e) => {
    let model = nanoid();
    setColumns([...columns, { title: e, id: model }]);
  };

  //DRAG FUNCTIONS
  const onDragEnd = () => {};

  //RENDER
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <div className="ColumnContainer">
          {columns.map((data) => {
            console.log(data.title);
            return <Column key={data.id} data={data} />;
          })}
          <Add list={false} doThis={handlerColumn} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
