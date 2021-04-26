import React, {useState,useContext, useEffect} from 'react'
import "./column.css"
import Card from "../Card/Card"
import Add from "../Add/Add"
import { nanoid } from "nanoid";
import {Droppable} from "react-beautiful-dnd";
import DynamicContext from '../../context/DynamicContext'


const Column = ({data, dragFunction}) => {
    //STATE
    const {column, setColumn} = useContext(DynamicContext);

    // DEFAULT 

    // HANDLE STATE
    const handlerCard = (e) => {
        let model = nanoid();
        //data.card.push({text:e, id:model})
        const newList = column.map(list => {
            if(list.id === data.id){
                return{
                    ...list,
                    card:[...list.card,{text:e, id:model} ]
                }
            }else{return list}
        })
        setColumn(newList);
    }

 
useEffect(() => {
   console.log(column);
}, [column])  

    return (
        <>
        <Droppable droppableId={String(data.id)} >
            {(provided)=>(        
            <div 
            {...provided.droppableProps} 
            ref={provided.innerRef} 
            className="Column">
                <h3>{data.title}</h3>
                <div className='Container-Cards'>
                    {data.card.map((dataCard, index)=>{return(
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

