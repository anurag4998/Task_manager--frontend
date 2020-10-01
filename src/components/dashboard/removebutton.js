import React, { useState } from "react";
import deleteTask from "../../apicall/deletetasks";



const Removebutton = (props) => {
    let [idArray, setIdArray] = useState([])
    const handleClick = async (e) => {
        const id = props.id
        setIdArray(oldArray => [...oldArray, [id]])
        await deleteTask(id)
        props.removeTask(idArray)
    }
    return (
        <button onClick={handleClick} className="icon-btn add-btn taskdisplay--remove">
            <div className="btn-txt">Remove</div>
        </button>
    )
}

export default Removebutton