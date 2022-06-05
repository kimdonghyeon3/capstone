import './header.css'
import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {Userlogin} from "../userinfo";


export function Login_btn(){
 
    return(
        <div>
            <Link className="header_link" to="/login">로그인</Link>
        </div>
        
    )
}

export function Logout_btn(){
    const userdata = useContext(Userlogin);

    const logout = () => {

        alert("로그아웃 되었습니다.");

        userdata.edituser({
            uid : '',
            id : '',
            role : '',
            login : false,
        })

        sessionStorage.clear();
        localStorage.clear();
    }

    return(
        <div>
            <Link className="header_link" to="/category/main" onClick={logout}>로그아웃</Link>
        </div>
    )
}

export function Header(){

    const userlogin = useContext(Userlogin);

    const [login_role,setLogin_role] =useState("");

    const [logInOut, setLogInOut] = useState({
        btn : <Login_btn/>,
    });

    useEffect(() => {
        // userlogin.login
        if(localStorage.getItem("uid") !== null){
            setLogInOut({
                ...logInOut,
                btn : <Logout_btn/>,
            });
            if(localStorage.getItem("role") === "E")
                setLogin_role("/company/profile");
            else{
                setLogin_role("/user/profile");
            }

        }else{
            setLogInOut({
                ...logInOut,
                btn : <Login_btn/>,
            });
        }
    },[userlogin]);


       //top button 헤더에 박음
       const [ScrollY, setScrollY] = useState(0);
       const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
       
       const handleFollow = () => {
         setScrollY(window.pageYOffset);
         if(ScrollY > 100) {
           // 100 이상이면 버튼이 보이게
           setBtnStatus(true);
         } else {
           // 100 이하면 버튼이 사라지게
           setBtnStatus(false);
         }
       }
     
       const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
         window.scrollTo({
           top: 0,
           behavior: "smooth"
         });
         setScrollY(0);  // ScrollY 의 값을 초기화
         setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
       }
     
       useEffect(() => {
         const watch = () => {
           window.addEventListener('scroll', handleFollow)
         }
         watch();
         return () => {
           window.removeEventListener('scroll', handleFollow)
         }
       })
     
   
   
    return(
        <header className="header">

                <div>
                <button className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
                onClick={handleTop}  // 버튼 클릭시 함수 호출
                >TOP</button>
                </div>

                <nav className="header_navbar">

                    <div className="header_item_left">
                        <Link className="header_link" to="/"><img src={require("../img/logo.png")} alt="" width="80" height="60"/></Link>
                    </div>

                    <ul className="head_container">
                        <li className="header_item_right">
                            <Link className="header_link" to={"/mypage" + login_role}>마이페이지</Link>
                        </li>
                        <li className="header_item_right">
                            {logInOut.btn}
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;