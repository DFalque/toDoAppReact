import React from "react";
import "./Card.css";
import {Draggable} from 'react-beautiful-dnd';

const Card = ({data,index}) => {
  return (
    <Draggable draggableId={String(data.id)} index={index} >
      {provided =>(    
      <div  className="Card" 
            ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps}>
              <p>{data.text}</p>
    </div>)}

    </Draggable>
  );
};

export default Card;
