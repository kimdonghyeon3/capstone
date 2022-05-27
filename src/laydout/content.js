import './content.css'
import React from "react";
import {NavLink} from 'react-router-dom';

export function Content(){
    return(
        <main className="content">
            <div>
                <h2> 메인 </h2>
                <div className="door">
                    <NavLink to="/category/main">
                        <img src={require("../img/door.jpg") } />
                    </NavLink>
                </div>
            </div>
        </main>
    )
}