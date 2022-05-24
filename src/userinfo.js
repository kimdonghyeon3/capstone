import {createContext, useState} from "react";


export const Userlogin = createContext();


export const UserPovider = ({children}) => {
    // const [userinfo, setUserinfo] = useState({
    //     uid : "",
    //     id : "",
    //     role : "",
    //     login: false,
    // });

    const [uid, setUid] = useState();
    const [id, setId] = useState();
    const [role, setRole] = useState();
    const [login, setLogin] = useState(false);

    const edituser = (data) => {
        console.log("edituser 실행됨");
        // console.log(data);
        // console.log(data.uid);
        // console.log(data.id);
        // console.log(data.role);
        // setUserinfo({
        //     ...userinfo,
        //     uid : data.uid,
        //     id : data.id,
        //     role : data.role,
        //     login: !userinfo.login
        // })
        setUid(data.uid);
        setId(data.id);
        setRole(data.role);
        setLogin(!login);
        // console.log("실행된뒤 userinfo정보");
        // console.log(uid);
        // console.log(id);
        // console.log(role);
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