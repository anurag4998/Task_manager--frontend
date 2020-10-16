import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import Logout from "../../apicall/logout"
import DeleteUser from "../../apicall/deleteuser"
import { Redirect } from "react-router-dom";
import Login from "../../components/login"
import swal from "sweetalert";
const Sidebar = (props) => {
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
        const remove = await swal({
            title: "Delete Account",
            text: "Deleting your account will remove all information from our database this can not be undone!",
            buttons: true,
            dangerMode: true,
        })

        if (remove) {
            swal("Your account has been removed!", {
                icon: "success",
            });
            setDel(await DeleteUser())
            document.getElementById("root").style.marginRight = "0px";
        }

    }

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
            {/*eslint-disable-next-line*/}
            {del.response == true ? <Redirect to="/" component={Login} /> : undefined}

        </div>

    )
}

export default Sidebar

