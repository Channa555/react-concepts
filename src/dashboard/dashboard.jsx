import React from "react";
import { useContext } from "react";
import {PropContext} from "../usercontext/userContext";

const Navigation=() =>
{
    const user = useContext(PropContext)
    return(
        // <> this tag is known as fragments, this will help as to mentain single parent tag.(empty tag or Fragment tag we can use to define it) 
        <>
            <ul>
                <li>About</li>
                <li>Home</li>
                <li>Contact</li>
            </ul>
            <div>
                <h4>UserName: {user.name}</h4>
                <p>UserEmail: {user.email}</p>
            </div>
            <>
            <label>Set UserName</label>
            <input type="text" id="name" onChange={user.setName} />
            <label>Set UserEmail</label>
            <input type="text" id="email" onChange={user.setEmail} />
            </>
        </>
    )
}


 export default Navigation;