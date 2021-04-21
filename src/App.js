import React, { useState } from "react";
import "./App.css";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
function App() {
  //STATES
  const [columns, setColumns] = useState(defaultColumn());
  console.log(columns);

  //DEFAULTS FORMS
  function defaultColumn() {
    return [
      {
        title: "pepee",
        id: 0,
      },
      { title: "que pasaa", id: 1 },
    ];
  }

  //CHANGE STATE
  const handlerColumn = (e) => {
    setColumns([...columns, { title: e, id: 100 }]);
  };

  //RENDER
  return (
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
  );
}

export default App;
