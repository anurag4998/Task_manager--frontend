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
        <div className="taskbarcontainer container">
            <form onSubmit={handlesubmit} className="row justify-content-start">
                <div className="col-10 col-lg-10 taskbarcontainer__textbox" >
                    <input type="text" name="taskinput" className="taskbarcontainer__textbox--text"  ></input>
                    <input type="checkbox" name="taskcheckbox" className="taskbarcontainer__textbox--checkbox"></input>
                </div>
                <div className="col-2 col-lg-2 " >
                    <button name="Addtaskbutton" type="submit" id="taskbarcontainer__button"></button>
                </div>
            </form>

        </div>


    )
}

export default Taskbar