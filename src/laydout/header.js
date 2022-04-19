import './header.css'
import {BsDoorOpenFill} from 'react-icons/bs';
import React from "react";
import {Link} from 'react-router-dom';
export function Header(){

    return(
        <header className="header">
            <div>
                <nav className="navbar">
                    <ul className="head_container">
                        <li className="item"><Link to="/mypage">마이페이지</Link></li>
                        <li className="item"><Link to="/login">로그인</Link></li>
                    </ul>
                    <div><Link to="/"><BsDoorOpenFill/>홈</Link></div>
                </nav>
            </div>
        </header>
    )
}

export default Header;