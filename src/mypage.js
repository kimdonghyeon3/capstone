import React from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import {Row, Tab, Col, Nav} from "react-bootstrap";

const contents = [
    {id:1, title:'user', description:<User/>},
    {id:2, title:'company', description:<Company/>},
]

function Company(){

    return(
        <div>
            <h2> 기업 마이페이지</h2>
        </div>
    )
}

function User(){

    return(
        <div>
            <h2 className="User_title"> 유저 마이페이지</h2>
            <div classNmae="user_layout">
                <div className="user_navbar">

                </div>
                <div className="user_content">
                </div>

            </div>
        </div>
    )
}

function Mypage_content(){
    var params = useParams();
    var mypage_id = params.mypage_id;
    var selected_category ={
        title : 'sorry',
        description : "No Script"
    }
    console.log("real national main : ",selected_category);
    for(let i = 0 ; i < contents.length ; i++){
        if(contents[i].title === mypage_id){
            selected_category = contents[i];
            break;
        }
    }

    return(
        <div>
            <h2>{selected_category.description}</h2>
        </div>
    )

}

function Mypage(){

    return(
        <div>
            <Header></Header>
            <h2> 마이페이지</h2>
            <ul>
                <li><Link to="/mypage/user"> 유저 마이페이지</Link></li>
                <li><Link to="/mypage/company">기업 마이페이지</Link></li>
            </ul>

            <Routes>
                <Route path="/:mypage_id" element={< Mypage_content/>}></Route>
            </Routes>

            <Footer/>

        </div>
    )
}

export default Mypage;