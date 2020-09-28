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

    let tasklist = tasks.map(task => task.description)
    let completed = tasks.map(task => task.completed)
    let createdAt = tasks.map(task => {
        let localDate = new Date(task.createdAt)
        let event = new Date(localDate)
        return `${event.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(event)} ${event.toLocaleTimeString('en-US')}`
    })


    return (
        <div>

        </div>
    )
}

export default Table

