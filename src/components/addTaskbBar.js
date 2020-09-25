import React, { useState } from "react";
import swal from 'sweetalert';
import postTask from "../apicall/posttasks"
const Taskbar = () => {
    const [flag, setFlag] = useState({});

    const handlesubmit = async (e) => {

        e.preventDefault();
        let task = e.target.task.value.trim()
        let completed = e.target.completed.value
        completed = completed ? true : false
        e.target.task.value = "";
        e.target.completed.checked = false
        setFlag(await postTask(task, completed))
        if (flag.created == false)
            swal("Oops!", flag.error, "error")
    }
    return (
        <div className="taskbarcontainer container">
            <form onSubmit={handlesubmit} className="row justify-content-center">
                <div className="col-10 col-lg-6 taskbarcontainer__textbox" >
                    <input type="text" name="task" className="taskbarcontainer__textbox--text" ></input>
                    <input type="checkbox" name="completed" className="taskbarcontainer__textbox--checkbox"></input>
                </div>
                <div className="col-2 col-lg-2 taskbarcontainer__button" >
                    <button type="submit"></button>
                </div>
            </form>

        </div>


    )
}

export default Taskbar