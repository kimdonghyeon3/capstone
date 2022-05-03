import './header.css'
import {BsDoorOpenFill} from 'react-icons/bs';
import React from "react";
import {Link} from 'react-router-dom';
export function Header(){

    return(
        <header className="header">
                <nav className="header_navbar">

                    <div className="header_item_left">
                        <Link className="header_link" to="/"><img src={require("../img/logo.png")} alt="" width="80" height="60"/></Link>
                    </div>

                    <ul className="head_container">
                        <li className="header_item_right">
                            <Link className="header_link" to="/mypage">마이페이지</Link>
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