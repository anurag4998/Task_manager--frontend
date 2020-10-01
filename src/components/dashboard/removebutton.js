import React, { useState } from "react";
import deleteTask from "../../apicall/deletetasks";



const Removebutton = (props) => {
    const handleClick = async (e) => {
        const id = props.id
        props.removeTask(id)
        await deleteTask(id)
    }
    return (
        <button onClick={handleClick} className="icon-btn add-btn taskdisplay--remove">
            <div className="btn-txt">Remove</div>
        </button>
    )
}

export default Removebutton