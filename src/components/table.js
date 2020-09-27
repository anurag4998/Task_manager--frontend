import React from "react";

const Table = (props) => {
    const name = props.taskarray.map(task => task.description)
    const time = props.taskarray.map(task => task.createdAt)
    return (
        <div>
            <h4>{name}</h4>
            <span>{time}</span>
        </div>)
}

export default Table