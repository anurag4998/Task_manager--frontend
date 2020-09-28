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
    let createdAt = tasks.map(task => task.createdAt)
    return (
        <div>
            <h1>{tasklist}</h1>
            <h1>{createdAt}</h1>
        </div>
    )
}

export default Table

