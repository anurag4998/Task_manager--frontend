import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import getTasks from "../../apicall/gettasks";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import Logout from "../../apicall/logout"
import DeleteUser from "../../apicall/deleteuser"
import { Redirect } from "react-router-dom";
import Login from "../../components/login"
import swal from "sweetalert";
const Sidebar = (props) => {
    const [tasks, setTasks] = useState();
    const [logout, setLogout] = useState({});
    const [del, setDel] = useState({})
    const handleClick = () => {
        if (document.getElementById("root").offsetWidth > 1000) {
            document.getElementById("root").style.marginRight = "0px";
        }
        props.setOpen(false)

    }
    const handleLogout = async () => {
        setLogout(await Logout());
        document.getElementById("root").style.marginRight = "0px";

    }
    const handleDelete = async () => {
        swal()
        setDel(await DeleteUser());
        document.getElementById("root").style.marginRight = "0px";

    }
    useEffect(() => {
        async function fetchtasks() {
            let a = await getTasks();
            setTasks(a)
        };
        fetchtasks()
    }, [])
    return (
        <div className={props.open ? "Sidebar__open" : "Sidebar__close"}>
            {props.open ? <div className="Sidebar__closebutton" onClick={handleClick}>
                X
            </div> : undefined}
            <div className="Sidebar__icon" >
                <FaUserCircle />
                <h5 className={props.open ? "sidebar--textshow" : "sidebar--texthide"}>
                    {props.user ? props.user : undefined}
                </h5>
            </div>

            <div className="Sidebar__logout" onClick={handleLogout}>
                <RiLogoutBoxRFill />
                <h5 className="logout--text">Logout</h5>
            </div>
            <div className="Sidebar__delete" onClick={handleDelete}>
                <TiUserDelete />
                <h5 className="delete--text">Delete</h5>
            </div>
            {/*eslint-disable-next-line*/}
            {logout.response == true ? <Redirect to="/" component={Login} /> : undefined}
            {del.response == true ? <Redirect to="/" component={Login} /> : undefined}

        </div>

    )
}

export default Sidebar

