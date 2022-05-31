import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BsDoorOpenFill} from 'react-icons/bs';
import {Footer} from './laydout/footer';
import {Header} from './laydout/header';
import {Content} from './laydout/content';
import Mypage from './mypage';
import Login from './login';
import Category from "./category";
import Register from './register';
import Userinfo, {Userlogin, UserPovider} from "./userinfo";
import ProductCreate from "./producdtCreate";

function Home(){

    const params = useParams();

    return(
        <div>
            <Header><BsDoorOpenFill/></Header>
            <div> {params.id}</div>
            <Content/>
            <Footer/>
        </div>
    )
}

function App(){

    const userdata = useContext(Userlogin);

    const logininfo = sessionStorage.getItem("login");

    if(logininfo === null){
        console.log("로그인 후 로그아웃")
    }else{
        console.log("로그인 하고 값 유지");
        userdata.edituser({
            uid : sessionStorage.getItem("uid"),
            id : sessionStorage.getItem("id"),
            role : sessionStorage.getItem("role"),
            login : true,
        })
        console.log(userdata);
    }

    return(
        <div>
            {/*<UserPovider>*/}
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/mypage/*" element={<Mypage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/category/*" element={<Category/>}/>
                    <Route path="/register/:register_id" element={<Register/>}/>
                    <Route path="/product/create" element={<ProductCreate/>}/>
                </Routes>
            {/*</UserPovider>*/}
        </div>

    )
}

ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
      <UserPovider>
    <App />
      </UserPovider>
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;