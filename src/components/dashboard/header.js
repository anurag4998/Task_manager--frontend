import React, { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import getUser from "../../apicall/readprofile"
const Header = () => {
    const [user, setUser] = useState()
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
                <h2> {user ? user : undefined}</h2>
            </div>
        </div>

    )

}

export default Header