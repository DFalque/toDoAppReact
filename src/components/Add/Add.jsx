import React, {useState} from "react";
import "./Add.css";
import TextareaAutosize from 'react-textarea-autosize';


const Add = ({list, doThis}) => {
  const [open, setOpen]  = useState(false);
  const [text, setText] = useState ('');


  //VARIABLES
  const addtext =  list ? "+ Add a new task" : "+ Add a new List";



// CHANGE STATE
  const handlerClick = () =>{
    setOpen(true)
    console.log(open);
  }

  const handlerDrag = () => {
    setOpen(false);
    if(text ===''){console.log('nothing')}else{doThis(text)}
    setText('');
  }

  const handlerInputChange = (e) => {
    setText(e)
    console.log(text)
  }

  //RENDER FUNTION
  const renderButton = () => {
    if(list){return (
      <div className='Add ' onClick={handlerClick}  >
        <p>{addtext}</p>
        </div>)}else{
          return (
            <div className='Add ' onClick={handlerClick} style={{
              minWidth:250,
            }} >
              <p>{addtext}</p>
              </div>
              )
        }


  }

  const renderPlaceholder = () =>{
    return (    
    <div className='Add Open ' onClick={() =>handlerClick}  onBlur={handlerDrag}  draggable="true" >
    <TextareaAutosize 
    autoFocus  
    placeholder="Introduce a task" 
    onChange={(e)=>handlerInputChange(e.target.value)}
    onKeyPress={(e)=> e.key === 'Enter' ? handlerDrag() : null}
    style={{
      overflow:'visible',
      resize:'none',
      border:'none',
      outline:'none',
      flexGrow: 2,
      borderRadius: 5,

    }}
    >
    </TextareaAutosize>
    <div className='containerAddOpen'>
        <div className='AddButton'>
        <p>+ Add</p>
        </div>
        <div className='CloseButton' >
        <p>X Close</p>
        </div>
    </div>
    </div>)
  }

  return (
    open ? renderPlaceholder() :  renderButton()
  );
};

export default Add;
