import React, {useContext, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';
import axios from "axios";
import {Userlogin} from "./userinfo";
import IdSearch from "./modals/idSearch";
import PwSearch from "./modals/pwSearch";

function Login({children}){

    const navigate = useNavigate();

    const baseUrl = "http://localhost:8080";

    const [state, setState] = useState({
        userId: "",
        password: "",
        role:"",
    });

    const userdata = useContext(Userlogin);

    const {userinfo, setUserinfo} = userdata;
    const [Idpopup, setIdpopup] = useState(false);  //아이디 찾기 팝업
    const [Pwpopup, setPwpopup] = useState(false);  //비밀번호 찾기 팝업

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(baseUrl + "/login", state)
            .then((response) =>{

                if(response.data.enterpriseId === state.userId){
                    navigate("/category/main")
                    console.log("로그인 성공")
                    userdata.edituser({
                        uid : response.data.enid,
                        id : response.data.enterpriseId,
                        role : response.data.role,
                        login : true,
                    })
                    sessionStorage.setItem("uid",response.data.enid);
                    sessionStorage.setItem("id",response.data.enterpriseId);
                    sessionStorage.setItem("role",response.data.role);
                    sessionStorage.setItem("login","true");
                    localStorage.setItem("uid",response.data.enid);
                    localStorage.setItem("id",response.data.enterpriseId);
                    localStorage.setItem("role",response.data.role);
                    localStorage.setItem("login","true");


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

                <IdSearch show={Idpopup} onHide={()=>setIdpopup(false)}/>
                <PwSearch show={Pwpopup} onHide={()=>setPwpopup(false)}/>

            <Header/>
            <div className="login_main_container">
            <div className="register_box"><strong>로그인</strong></div>
                    <hr className="sun"size="3" width="105%" color="black"/></div>

            <div className="form_container">
            <form onSubmit={handleSubmit} className="login_form">
                <div className="radio_container">
                <div className="radio"><input type="radio" name="role" value="E" onChange={handleChange}/>기업 로그인</div>
                <div className="radio"><input type="radio" name="role" value="U" onChange={handleChange}/>일반 로그인</div></div>
                <div><input className="asd1" type="text" name="userId" placeholder="아이디" onChange={handleChange}/></div>
                <div><input className="asd1" type="password" name="password" placeholder="비밀번호" onChange={handleChange}/></div>

                <div className="findid"><button type="button" className="findid_bt" onClick={()=>setIdpopup(true)}> 아이디찾기</button>
                <div className="findpw"><button type="button" className="findpw_bt" onClick={()=>setPwpopup(true)}> 비밀번호찾기</button>

                <div className="signup"><Link to="/register/main"><button className="signup_bt"> 회원가입</button></Link></div>
                </div>
                </div>
                <div><button className="asd" type="submit"><strong>로그인</strong></button></div>
            </form>
            </div>


            <div className="gap"/>
            <Footer/>
            </Userlogin.Provider>
        </div>

    );
}
//
export default Login;