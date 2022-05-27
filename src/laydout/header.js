import './header.css'
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Userlogin} from "../userinfo";
export function Header(){
    const userlogin = useContext(Userlogin);

    const [login_role,setLogin_role] =useState("");

    useEffect(() => {

        if(userlogin.login){

            if(userlogin.role === "E")
                setLogin_role("/company/profile");
            else{
                setLogin_role("/user/profile");
            }
        }else{
            console.log("로그인 전");
        }
    });

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
                            <Link className="header_link" to="/login">로그인</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;