import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import getTasks from "../../apicall/gettasks";

const Sidebar = (props) => {
    const [tasks, setTasks] = useState();
    const handleClick = () => {
        if (document.getElementById("root").offsetWidth > 1000) {
            document.getElementById("root").style.marginRight = "0px";
        }
        props.setOpen(false)

    }
    useEffect(() => {
        async function fetchtasks() {
            let a = await getTasks();
            setTasks(a)
        };
        fetchtasks()
    }, [props.open])
    return (
        <div onClick={handleClick} className={props.open ? "Sidebar--open" : "Sidebar--close"}>
            <div className="icon">
                <FaUserCircle />
                <h5 className={props.open ? "sidebar--textshow" : "sidebar--texthide"}>
                    {props.user ? props.user : undefined}
                </h5>
            </div>
            <div className="total">
                {tasks ? tasks.length : undefined}
            </div>
        </div>

    )
}

export default Sidebar