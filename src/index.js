import React from 'react';
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
import Userinfo, {UserPovider} from "./userinfo";

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

    return(
        <div>
            <UserPovider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/mypage/*" element={<Mypage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/category/*" element={<Category/>}></Route>
                    <Route path="/register/:register_id" element={<Register/>}></Route>
                </Routes>
            </UserPovider>
        </div>

    )
}

ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;