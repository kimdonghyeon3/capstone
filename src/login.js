import React, {useContext, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';
import axios from "axios";
import Userinfo, {Userlogin} from "./userinfo";

function Login({children}){

    const navigate = useNavigate();

    const baseUrl = "http://localhost:8080";

    const [state, setState] = useState({
        userId: "",
        password: "",
        role:"",
    });

    const userdata = useContext(Userlogin);

    console.log(userdata);
    const {userinfo, setUserinfo} = userdata;
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        await axios
            .post(baseUrl + "/login", state)
            .then((response) =>{
                console.log(response.data);

                if(response.data.enterpriseId === state.userId){

                    navigate("/category/main")
                    console.log("retur이 실해오디니?")
                    userdata.edituser({
                        uid : response.data.enid,
                        id : response.data.enterpriseId,
                        role : response.data.role,
                        login : true,
                    })
                    console.log(userdata);

                }else{
                    alert("아이디와 비밀번호가 잘못되었습니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <Userlogin.Provider value={{userinfo, setUserinfo}}>

            <Header></Header>

            <div className="gap"></div>
            <h2><center><strong>문앞에</strong></center></h2>

            <div className="gap"></div>

            <form onSubmit={handleSubmit} className="login_form">
                <div><input type="radio" name="role" value="E" onChange={handleChange}></input>기업 로그인</div>
                <div><input type="radio" name="role" value="U" onChange={handleChange}></input>일반 로그인</div>
                <div><input type="text" name="userId" placeholder="아이디" onChange={handleChange}></input></div>
                <div><input type="password" name="password" placeholder="비밀번호" onChange={handleChange}></input></div>
                <div><button type="submit">로그인</button></div>
            </form>

            <div className="findid"><button className="findid_bt"> 아이디찾기</button>
                <div className="findpw"><button className="findpw_bt"> 비밀번호찾기</button>
                    <div className="signup"><Link to="/register/main"><button className="signup_bt"> 회원가입</button></Link></div>
                </div>
            </div>

            <div className="gap"></div>
            <Footer></Footer>
            </Userlogin.Provider>
        </div>

    );
}

export default Login;