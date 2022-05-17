import React, { useState } from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import './login.css';

function Selectmode(){
    return(
        <div className="user_btn"><Link to="/login/"><button className="user_bt"> 개인 로그인</button></Link>
            <div className="company_btn"><Link to="/login//"><button className="company_bt"> 기업 로그인</button></Link></div>
        </div>
    )
}

function Loginform(props){

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
                    onChange={handleChange}/>
            </dd>
            <div className="login_config"><button className="login_configbt"> 로그인</button></div>

            <div className="gap"></div>
        </div>
    )
}


function Findany(){
    return(
        <div className="findid"><button className="findid_bt"> 아이디찾기</button>
            <div className="findpw"><button className="findpw_bt"> 비밀번호찾기</button>
                <div className="signup"><Link to="/register/main"><button className="signup_bt"> 회원가입</button></Link></div>
            </div>
        </div>
    )

}
function Login(){

    return(

        <div>
            <Header></Header>
            <div className="gap"></div>
            <h2><center><strong>문앞에</strong></center></h2>



            <div className="gap"></div>
            <Routes>
                <Route path="/" element={<Selectmode/>}/>
            </Routes>

            <Routes>
                <Route path="/" element={<Loginform/>}/>
            </Routes>

            <Routes>
                <Route path="/" element={<Findany/>}/>
            </Routes>

            <div className="gap"></div>
            <Footer></Footer>
        </div>

    );
}

export default Login;