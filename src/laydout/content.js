import './content.css'
import React from "react";
import {NavLink} from 'react-router-dom';

export function Content(){

    return(
        <main className="content" style={{backgroundColor:'white'}}>
            <div>
                 <div>
                    <NavLink to="/category/main">
                    <div className="arrangement">
                    <video autoPlay loop muted >
                    <source src={require("../img/video_123.mp4")} type="video/mp4"/>
                    </video>
                    </div>
                    </NavLink>
                 </div>
            </div>
        </main>
    )
}