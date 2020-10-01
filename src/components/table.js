import React, { useEffect, useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import Removebutton from './dashboard/removebutton'
import getTasks from "../apicall/gettasks";
import updateTask from "../apicall/updatetask";
const Table = (props) => {
    const [tasks, setTasks] = useState([]);
    const removeTask = (id) => {
        tasks.filter(task => task._id == id ? false : true)
    }
    const handleSubmit = async (e) => {
        const id = e.target.id
        const status = e.target.checked
        await updateTask(status, id)
    }
    useEffect(() => {
        async function fetchtasks() {
            let a = await getTasks();
            setTasks(a)
        };
        fetchtasks()
    }, [props.taskarray, tasks])


    // let createdAt = tasks.map(task => {
    //     let localDate = new Date(task.createdAt)
    //     let event = new Date(localDate)
    //     return `${event.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(event)} ${event.toLocaleTimeString('en-US')}`
    // })   
    let taskcontainer = tasks.map(task => {
        let localDate = new Date(task.createdAt)
        let event = new Date(localDate)
        return (
            <div key={task._id} className='taskdisplay row'>
                <Tippy content='Mark as completed' theme={'blue'} animation="scale">
                    <input onClick={handleSubmit} id={task._id} type="checkbox" defaultChecked={task.completed} className='taskdisplay--checkbox' ></input>
                </Tippy>

                <div className='taskdisplay--description '>{task.description}</div>
                <span className='taskdisplay--date '>{`${event.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(event)} ${event.toLocaleTimeString('en-US')}`}</span>
                <Removebutton id={task._id} removeTask={removeTask} />
            </div>
        )

    })
    console.log(taskcontainer)
    return (
        <div className='taskdisplay--wrapper' >
            { taskcontainer}

        </div >
    )
}

export default Table

