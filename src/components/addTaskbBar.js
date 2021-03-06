import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import postTask from "../apicall/posttasks"

const Taskbar = (props) => {
    const [flag, setFlag] = useState({});
    let [taskArray, setTaskaray] = useState([])

    const handlesubmit = async (e) => {

        e.preventDefault();
        let task = e.target.taskinput.value.trim()
        let completed = e.target.taskcheckbox.checked
        if (!task)
            return swal("Oops!", "Add a task to get started", "error")
        setTaskaray(oldArray => [...oldArray, [task, completed]])
        e.target.taskinput.value = "";
        e.target.taskcheckbox.checked = false
        setFlag(await postTask(task, completed))
        props.created(taskArray)
    }

    useEffect(() => {
        /*eslint-disable-next-line*/
        if (flag.created == false) {
            swal("Network Issue!", flag.error, "error")

        }
    }, [flag])

    return (
        <div className="taskbarcontainer">
            <form onSubmit={handlesubmit}>
                <div className="taskbarcontainer__textbox" >
                    <input type="text" name="taskinput" className="taskbarcontainer__textbox--text" placeholder="Enter your task here ..."></input>
                    <input type="checkbox" name="taskcheckbox" className="taskbarcontainer__textbox--checkbox"></input>
                </div>
                <div >
                    <button name="Addtaskbutton" type="submit" id="taskbarcontainer__button"></button>
                </div>
            </form>

        </div>


    )
}

export default Taskbar