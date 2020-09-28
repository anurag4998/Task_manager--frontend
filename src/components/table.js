import React, { useEffect, useState } from "react";
import getTasks from "../apicall/gettasks";

const Table = (props) => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function fetchtasks() {
            let a = await getTasks();
            setTasks(a)
            setTasks(oldarray => [...oldarray, props.taskarray])

        };
        fetchtasks()
    }, [props.taskarray])

    let tasklist = tasks.map(task => task.description)
    return (
        <div>
            <h1>{tasklist}</h1>
        </div>
    )
}

export default Table

