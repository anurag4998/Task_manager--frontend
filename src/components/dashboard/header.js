import React, { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import getUser from "../../apicall/readprofile"
import Sidebar from "./sidebar"
import { RiSettings5Line } from "react-icons/ri";

const Header = () => {
    const [user, setUser] = useState()
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    useEffect(() => {
        async function fetchUser() {
            let a = await getUser();
            setUser(a)
        };
        fetchUser()
    })
    return (
        <div className="headercontainer">
            <div className="headericon">
                <h2>
                    {" "}
                    <span>
                        <FcViewDetails />
                    </span>
             TaskManager{" "}
                </h2>
            </div>
            <div className="Welcometext">
                <h2 onClick={handleClick} ><RiSettings5Line /></h2>
            </div>
            <Sidebar open={open} setOpen={setOpen} />
        </div>

    )

}

export default Header