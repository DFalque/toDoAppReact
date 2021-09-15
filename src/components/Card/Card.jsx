import React from "react";
import "./Card.css";
import {Draggable} from 'react-beautiful-dnd';
import TextareaAutosize from 'react-textarea-autosize';



const Card = ({data,index}) => {
  return (
    <Draggable draggableId={String(data.id)} index={index} >
      {provided =>(    
      <div  className="Card" 
            ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps}>
              <div className='CardText' > 
              <p className='TextCard'>{data.text}</p></div>
             
              
    </div>)}

    </Draggable>
  );
};

export default Card;
