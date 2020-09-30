import React, { useState } from "react";
import { FcViewDetails } from "react-icons/fc";

const Header = () => {
    return (
        <div className="headercontainer">
            <div className="headericon" >
                <h2>
                    {" "}
                    <span>
                        <FcViewDetails />
                    </span>
             TaskManager{" "}
                </h2>
            </div>
        </div>

    )

}

export default Header