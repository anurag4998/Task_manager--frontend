import React, { useEffect, useState } from "react";
import getTasks from "../apicall/gettasks";

const Table = (props) => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function fetchtasks() {
            let a = await getTasks();
            setTasks(a)
        };
        fetchtasks()
    }, [props.taskarray])


    // let createdAt = tasks.map(task => {
    //     let localDate = new Date(task.createdAt)
    //     let event = new Date(localDate)
    //     return `${event.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(event)} ${event.toLocaleTimeString('en-US')}`
    // })   
    let taskcontainer = tasks.map(task => {
        let localDate = new Date(task.createdAt)
        let event = new Date(localDate)
        return (
            <div key={task._id} className='taskdisplay row ' >
                <input type="checkbox" defaultChecked={task.completed} className='taskdisplay--checkbox' ></input>
                <div className='taskdisplay--description '>{task.description}</div>
                <span className='taskdisplay--date '>{`${event.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(event)} ${event.toLocaleTimeString('en-US')}`}</span>
            </div>
        )

    })

    return (
        <div >
            { taskcontainer}

        </div >
    )
}

export default Table

