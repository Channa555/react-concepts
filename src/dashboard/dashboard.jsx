import React from "react";
import { useContext } from "react";
import {PropContext} from "../usercontext/userContext";
import { Link } from "react-router-dom";
import { addToStore,clearStore, removeItemFromStore } from "../cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Navigation=() =>
{
    const user = useContext(PropContext)
    const dispach = useDispatch()//using useDispch hook we are creating variable to add item
    const selectItem = useSelector((state) => state.ecommerce)// using useSelector we are trying read value from store.

    const handleItem =()=>{
        let item = (document.getElementById('item').value)
        dispach(addToStore({ id: 4, name: item }));//Using dispach we are adding items to store
    }
    return(
        // <> this tag is known as fragments, this will help as to mentain single parent tag.(empty tag or Fragment tag we can use to define it) 
        <>
            <ul className="navigation">
                <Link to='/about'><li>About</li></Link>
                <Link to='/'><li>Home</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
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
            <div>
                <label>Add Item</label>
                <input type="text" id="item" placeholder="Item"/>
                <input type="button"  onClick={() => handleItem()} value="AddItem" placeholder="Add Item" />
                <ul key={"itemList"}>
                {
                    selectItem.map((item) =>(
                        // Listing all store values
                        <li key={item.payload['id']}>{item.payload['name']}</li>
                    ))
                }
                </ul>
            </div>
            </>
        </>
    )
}


 export default Navigation;