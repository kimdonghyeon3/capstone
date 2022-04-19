import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BsDoorOpenFill} from 'react-icons/bs';
import {Footer} from './laydout/footer';
import {Header} from './laydout/header';
import {Content} from './laydout/content';
import Mypage from './mypage';
import Login from './login';
import Category from "./category";

function Home(){
    return(
        <div>
            <Header><BsDoorOpenFill/></Header>
            <Content/>
            <Footer/>
        </div>
    )
}

function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/mypage" element={<Mypage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/category/*" element={<Category/>}></Route>
                {/*<Route path="/category/lifestyle" element={<Category/>}></Route>*/}
                {/*<Route path="/category/content" element={<Category/>}></Route>*/}
                {/*<Route path="/category/food" element={<Category/>}></Route>*/}
                {/*<Route path="/category/best" element={<Category/>}></Route>*/}
                {/*<Route path="/category/sale" element={<Category/>}></Route>*/}
            </Routes>

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