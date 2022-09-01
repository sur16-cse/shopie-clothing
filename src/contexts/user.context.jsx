import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
//as the actual value ypu want to access
//default value in create context
export const UserContext=createContext({
    //set null value whether the user object exist or not there is no context when there is no user
    currentUser:null,
    //empty function
    setCurrentUser:()=>null
})

//provider is a actual component that receive children return user context dot provider
export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    //an object that passes the two values 
    const value={currentUser,setCurrentUser}
    
    //whenever auth changes setcurrent user update  for sign in or sign out this useeffect managae both 
    useEffect(()=>{
        const unsubscribe=onAuthStateChangedListener((user)=>{
            //if new user then create user document for new user otherwise simply set user
            if(user)
                createUserDocumentFromAuth(user);
            console.log(user)
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    
     //the provider is the component that will wrap around any other components that need access to the values inside that are just going to render the children.
    //provider receive the value, which is going to hold the actual contextual values.
    // provider is essentially allowing any of its child components to access the values inside of its used state.
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
