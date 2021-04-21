import React, {useState} from 'react'
import "./column.css"
import Card from "../Card/Card"
import Add from "../Add/Add"

const Column = ({data}) => {
    const [card,setCard] = useState(defaultCard())

    function defaultCard (){
        return[{text:'hola colega',id:0},{text:'cabron',id:10}]}

    const handlerCard = (e) => {
       setCard(  [...card,{text:e, id:100}]);
    }

    return (
        <div className="Column">
            <h3>{data.title}</h3>
            {card.map(dataCard=>{return(<Card key={data.id} data={dataCard}  />)})}
            <Add doThis={handlerCard} />
        </div>
    )
}

export default Column;

