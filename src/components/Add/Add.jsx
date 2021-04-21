import React, {useState} from "react";
import "./Add.css";

const Add = ({list, doThis}) => {
  const [open, setOpen]  = useState(false);
  const [text, setText] = useState ('');


  //VARIABLES
  const addtext =  list ? "Crear Tarjeta" : "Crear nueva Columna";


// CHANGE STATE
  const handlerClick = () =>{
    setOpen(true)
    console.log(open);
  }



  const handlerDrag = () => {
    setOpen(false);
    console.log("este es el texto " ,text)
    doThis(text)

  }

  const handlerInputChange = (e) => {
    setText(e)
    console.log(text)
  }

  //RENDER FUNTION
  const renderButton = () => {
    return (
    <div className='Add ' onClick={handlerClick} >
      <p>{addtext}</p>
      </div>)

  }

  const renderPlaceholder = () =>{
    return (    
    <div className='Add Open ' onClick={() =>handlerClick}  onBlur={handlerDrag}  draggable="true" >
    <input autoFocus 
    className="input" 
    placeholder="Tranquilo tio" 
    onChange={(e)=>handlerInputChange(e.target.value)}></input>
    <div>
      <p>Add</p>
      <p>Close</p>
    </div>
    </div>)
  }

  return (
    open ? renderPlaceholder() :  renderButton()
  );
};

export default Add;
