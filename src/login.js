import React, { useState } from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import './login.css';


function Login(props){
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    console.log("렌더링");
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    return(

        <div>
            <Header></Header>
            <div className="gap"></div>
            <h2><center><strong>문앞에</strong></center></h2>
            <div className="user_btn"><button className="user_bt"> 개인 로그인</button>
                <div className="company_btn"><button className="company_bt"> 기업 로그인</button></div>
            </div>

            <dd className="user_id">
                <input
                    type="email"
                    id="email"
                    placeholder="아이디"
                    value={state.email}
                    onChange={handleChange}/>

            </dd>

            <dd className="user_pw">
                <input
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    value={state.password}
                    onChange={handleChange}
                />
            </dd>

            <div className="login_config"><button className="login_configbt"> 로그인</button></div>
            <div className="gap"></div>
            <div className="findid"><button className="findid_bt"> 아이디찾기</button>
                <div className="findpw"><button className="findpw_bt"> 비밀번호찾기</button>
                    <div className="signup"><button className="signup_bt"> 회원가입</button></div>
                </div>
            </div>
            <div className="'loginnn'"><Link className="category_sub_link" to="/">로그인</Link></div>
            <div className="gap"></div>
            <Footer></Footer>
        </div>

    );


    function company(){
//라우터 링크 연결 및 로그인 누르면 메인 페이지로 가게
        return(
            <div>
                <Header></Header>
                <h2> aa</h2>
                <ul>
                    <li><Link to="/login/user"> 유저</Link></li>
                    <li><Link to="/login/company">기업</Link></li>
                </ul>

                {/*<Routes>*/}
                {/*    <Route path="/:login_id/*" element={login}></Route>*/}
                {/*</Routes>*/}

                <Footer/>

            </div>
        )
    }
}
export default Login;