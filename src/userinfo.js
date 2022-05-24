import {createContext, useState} from "react";


export const Userlogin = createContext({
    uid : "",
    id : "",
    role : "",
    setUid : () => {},
    setId : () => {},
    setRole : () => {},
});

function Userinfo ({children}){

    const[userinfo, setUserinfo] = useState({
        uid : "",
        id : "",
        role : "",
        setUid : () => {},
        setId : () => {},
        setRole : () => {},
    });

    const [uid, setUid] = useState("");
    const [id, setId] = useState("");
    const [role, setRole] = useState("");
    const setuid = () => {
        setUid((uid) => {

        })
    }


    return(
        <Userlogin.Provider value={userinfo}>{children}</Userlogin.Provider>
    )
}

export default Userinfo;