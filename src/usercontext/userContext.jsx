import { createContext, useEffect, useState } from "react";


export const PropContext = createContext();
const AvoidPropDrilling =({children})=>{
  //Always we should use useState inside component only
   const [user, setUser] = useState({ name: 'Channabasava', email: 'channabasava1098@gmail.com' });

  // creating functions for set username and email
    const setName = (e)=>{
        setUser((prev)=>({...prev, name: e.target.value}))// ...prev this spread operator help us to keep other attribute as same as previous value
    }
  //  let name, email = {...user}

    const setEmail = (e)=>{
        // let emailVal = document.getElementById('')
        setUser((prev) =>({...prev, email: e.target.value}))
    }
    useEffect(()=>{
      console.log('user email getting changed')
    },[user.email])//If we not pass any dependency it will call after every render
                   //If we pass empty [] it will after initial render
                   //If we pass dependency then it will be call after initial aswell as whenever dependency value get changes
    const value = {
        name: user.name,
        email: user.email,
        setName: setName,
        setEmail: setEmail,
    }
    // Passing the object to the other components using Context.provider, so that other components also can use these variables and function from any where
    // By using createContext, useContext we can avoid propdrilling
    // Pasing props from parent to grand children or grand-grand children is known as propdrilling
    return(<PropContext.Provider value={value}>
            {children}
           </PropContext.Provider>)
  }

export default AvoidPropDrilling;