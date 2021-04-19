import React from 'react'
import "./column.css"
import Card from "../Card/Card"
import Add from "../Add/Add.js"

const Column = () => {
    return (
        <div className="Column">
            <h3>Titulo</h3>
            <Card/>
            <Add/>
        </div>
    )
}

export default Column

