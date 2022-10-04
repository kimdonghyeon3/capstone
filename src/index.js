import React, {useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, useParams, useLocation, useNavigate} from 'react-router-dom';
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
import ProductDetail from "./productDetail";
import ProductEdit from "./productEdit";

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

let currentPath = "";

function App(){

    const userdata = useContext(Userlogin);

    const logininfo = localStorage.getItem("login");

    useEffect( () => {
        if(logininfo === null){
            // console.log("로그인 후 로그아웃")
        }else{
            // console.log("로그인 하고 값 유지");
            userdata.edituser({
                uid : localStorage.getItem("uid"),
                id : localStorage.getItem("id"),
                role : localStorage.getItem("role"),
                login : true,
            })
            // console.log(userdata);
        }
    },[])


    return(
        <div>
            <UserPovider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/mypage/*" element={<Mypage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/category/*" element={<Category/>}/>
                    <Route path="/register/:register_id" element={<Register/>}/>
                    <Route path="/product/create" element={<ProductCreate/>}/>
                    <Route path="/product/detail/:product_pdid" element={<ProductDetail/>}></Route>
                    <Route path="/product/edit/:edit_pdid" element={<ProductEdit/>}></Route>
                    {/*<Route path="/product/detail/:product_pdid" element={<ProductDetail uid={sessionStorage.getItem("uid")}/>}></Route>*/}
                </Routes>
            </UserPovider>
        </div>

    )
}

ReactDOM.render(
    <UserPovider>
        <BrowserRouter>
          <React.StrictMode>
              {/*<UserPovider>*/}
                <App />
              {/*</UserPovider>*/}
          </React.StrictMode>
        </BrowserRouter>
    </UserPovider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;