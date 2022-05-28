import './header.css'
import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {Userlogin} from "../userinfo";


export function Login_btn(){
    return(
        <div>
            <Link className="header_link" to="/login">로그인</Link>
        </div>
    )
}

export function Logout_btn(){
    const userdata = useContext(Userlogin);

    const logout = () => {

        alert("로그아웃 되었습니다.");

        userdata.edituser({
            uid : '',
            id : '',
            role : '',
            login : false,
        })
    }

    return(
        <div>
            <Link className="header_link" to="/category/main" onClick={logout}>로그아웃</Link>
        </div>
    )
}

export function Header(){

    const userlogin = useContext(Userlogin);

    const [login_role,setLogin_role] =useState("");

    const [logInOut, setLogInOut] = useState({
        btn : <Login_btn/>,
    });

    useEffect(() => {

        if(userlogin.login){
            setLogInOut({
                ...logInOut,
                btn : <Logout_btn/>,
            });
            if(userlogin.role === "E")
                setLogin_role("/company/profile");
            else{
                setLogin_role("/user/profile");
            }

        }else{
            console.log("로그인 전");
            setLogInOut({
                ...logInOut,
                btn : <Login_btn/>,
            });
        }
    },[userlogin]);

    return(
        <header className="header">
                <nav className="header_navbar">

                    <div className="header_item_left">
                        <Link className="header_link" to="/"><img src={require("../img/logo.png")} alt="" width="80" height="60"/></Link>
                    </div>

                    <ul className="head_container">
                        <li className="header_item_right">
                            <Link className="header_link" to={"/mypage" + login_role}>마이페이지</Link>
                        </li>
                        <li className="header_item_right">
                            {logInOut.btn}
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;