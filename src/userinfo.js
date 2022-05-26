import {createContext, useState} from "react";


export const Userlogin = createContext();

export const UserPovider = ({children}) => {

    const [uid, setUid] = useState();
    const [id, setId] = useState();
    const [role, setRole] = useState();
    const [login, setLogin] = useState(false);

    const edituser = (data) => {
        console.log("edituser 실행됨");
        setUid(data.uid);
        setId(data.id);
        setRole(data.role);
        setLogin(data.login);
    }

    return(
        <Userlogin.Provider value={{
            uid,
            id,
            role,
            login,
            edituser,
        }}>{children}</Userlogin.Provider>
    );
}

// function Userinfo ({children}){
//
//     const[userinfo, setUserinfo] = useState({
//         uid : "",
//         id : "",
//         role : "",
//         login: false,
//     });
//
//     return(
//         <Userlogin.Provider value={{userinfo, setUserinfo}}>{children}</Userlogin.Provider>
//     )
// }
//
// export default Userinfo;