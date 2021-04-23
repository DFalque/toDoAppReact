import React, {useState} from 'react'
import "./column.css"
import Card from "../Card/Card"
import Add from "../Add/Add"
import { nanoid } from "nanoid";
import {Droppable} from "react-beautiful-dnd";


const Column = ({data}) => {
    const [card,setCard] = useState(defaultCard())

    function defaultCard (){
        let model = nanoid();
        return[{text:'Write your Task here',id:model}]}

    const handlerCard = (e) => {
    let model = nanoid();
       setCard(  [...card,{text:e, id:model}]);
    }

    return (
        <>
        <Droppable droppableId={String(data.id)}>
            {(provided)=>(        
            <div 
            {...provided.droppableProps} 
            ref={provided.innerRef} 
            className="Column">
                <h3>{data.title}</h3>
                <div className='Container-Cards'>
                    {card.map((dataCard, index)=>{return(
                        <Card   key={dataCard.id} 
                                data={dataCard} 
                                id={dataCard.id}
                                index={index}  />)})}
                        
                    {provided.placeholder}
                </div>
            <Add list={true} doThis={handlerCard} />
             </div>)}
        </Droppable>
        </>
    )
}

export default Column;

