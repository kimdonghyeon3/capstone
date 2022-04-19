import React from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';

function Mypage(){

    return(
        <div>
            <Header></Header>
            <h2> 마이페이지</h2>
            <Footer/>
        </div>
    )
}

export default Mypage;