import React, {useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './register.css';
import axios from "axios";

function Register_main(){
    return(
        <div className="register_main_container">
            <div className="register_main_item_div register_main_left"> <Link to="/register/user" className="register_main_item">개인 회원가입</Link></div>
            <div className="register_main_item_div register_main_right"> <Link to="/register/company" className="register_main_item">기업 회원가입</Link></div>
        </div>
    )
}
function Register_user(){

    const baseUrl = "http://localhost:8080";

    const[enroll_user, setEnroll_user] = useState({
        id:'',
        role:'USER',
        userName:'',
        birth:'',
        phoneNumber:'',
        userId:'',
        password:'',
        email:'',
        userYN:'Y',
    });

    //const  {id, role, userName, birth, phoneNumber, userId, password, email, userYN} = temp;

    const handleInput = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setEnroll_user({
            ...enroll_user,
            [name]:value,
        });
        console.log("...enroll_user" + {...enroll_user});
        console.log("enroll)user" + enroll_user);
        console.log("...name" + name);
        console.log("...value" + value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(enroll_user);
        await axios
            .post(baseUrl + "/register/user", enroll_user)
            .then((response) =>{
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="user_enroll_form">
                <div><p>id<input className="user_enroll_text" placeholder="아이디" type="hidden" required={true} name="id" onChange={handleInput}></input></p></div>
                <div><p>role<input className="user_enroll_text" placeholder="역할"  type="hidden" required={true} name="role" onChange={handleInput}></input></p></div>
                <div><p>username<input className="user_enroll_text" placeholder="유저이름"  type="text" required={true} name="userName" onChange={handleInput}></input></p></div>
                <div><p>birth<input className="user_enroll_text" placeholder="생년월일"  type="text" required={true} name="birth" onChange={handleInput}></input></p></div>
                <div><p>phone<input className="user_enroll_text" placeholder="휴대폰 번호"  type="text" required={true} name="phoneNumber" onChange={handleInput}></input></p></div>
                <div><p>userid<input className="user_enroll_text" placeholder="아이디"  type="text" required={true} name="userId" onChange={handleInput}></input></p></div>
                <div><p>password<input className="user_enroll_text" placeholder="비밀번호"  type="text" required={true} name="password" onChange={handleInput}></input></p></div>
                <div><p>email<input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/></p></div>
                <div><p>userYN<input className="user_enroll_text" placeholder="가입유무"  type="hidden" required={true} name="userYN" onChange={handleInput}></input></p></div>
                <div><button type="submit">회원가입</button></div>
            </form>

        </div>
    )
}
function Register_company(){

    const baseUrl = "http://localhost:8080";

    const[enroll_company, setEnroll_company] = useState({
        id:'',
        role:'COMPANY',
        companyName:'',
        companyNum:'',
        phoneNumber:'',
        companyId:'',
        password:'',
        email:'',
        userYN:'Y',
    });

    //const  {id, role, userName, birth, phoneNumber, userId, password, email, userYN} = temp;

    const handleInput = (e)=>{
        e.preventDefault();
        console.log("??");
        const {name, value} = e.target;
        setEnroll_company({
            ...enroll_company,
            [name]:value,
        });
        console.log({...enroll_company});
        console.log("...name" + name);
        console.log("...value" + value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(enroll_company);
        await axios
            .post(baseUrl + "/register/company", enroll_company)
            .then((response) =>{
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="user_enroll_form">
                <div><p>id<input className="user_enroll_text" placeholder="아이디" type="hidden" required={true} name="id" onChange={handleInput}></input></p></div>
                <div><p>role<input className="user_enroll_text" placeholder="역할"  type="hidden" required={true} name="role" onChange={handleInput}></input></p></div>
                <div><p>companyName<input className="user_enroll_text" placeholder="기업명"  type="text" required={true} name="companyName" onChange={handleInput}></input></p></div>
                <div><p>companyNum<input className="user_enroll_text" placeholder="사업자번호"  type="text" required={true} name="companyNum" onChange={handleInput}></input></p></div>
                <div><p>phone<input className="user_enroll_text" placeholder="휴대폰 번호"  type="text" required={true} name="phoneNumber" onChange={handleInput}></input></p></div>
                <div><p>companyId<input className="user_enroll_text" placeholder="아이디"  type="text" required={true} name="companyId" onChange={handleInput}></input></p></div>
                <div><p>password<input className="user_enroll_text" placeholder="비밀번호"  type="text" required={true} name="password" onChange={handleInput}></input></p></div>
                <div><p>email<input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/></p></div>
                <div><p>userYN<input className="user_enroll_text" placeholder="가입유무"  type="hidden" required={true} name="userYN" onChange={handleInput}></input></p></div>
                <div><button type="submit">회원가입</button></div>
            </form>

        </div>
    )
}

// function Register_select_cu(){
//     var params = useParams();
//     var category_id = params.register_id;
//     console.log('params.register_id ', params, params.register_id);
//
//     var selected_category ={
//         title : 'sorry',
//         description : <Registeruser/>,
//     }
//     console.log("selecteddd : ",selected_category);
//     for(let i = 0 ; i < Register_cu.length ; i++){
//         if(Register_cu[i].title === category_id){
//             selected_category.description = Register_cu[i].des;
//             break;
//         }
//     }
//
//     return (
//         <div>
//             {selected_category.description}
//         </div>
//
//     )
// }


const Register_content = [
    {title:'main', des : <Register_main/>},
    {title:'company', des : <Register_company/>},
    {title:'user', des : <Register_user/>}
]

function Register(){

    var params = useParams();
    var category_id = params.register_id;
    console.log('params.register_id ', params, params.register_id);

    var selected_category ={
        title : 'sorry',
        description : "no page",
    }
    console.log("selecteddd : ",selected_category);
    for(let i = 0 ; i < Register_content.length ; i++){
        if(Register_content[i].title === category_id){
            selected_category.description = Register_content[i].des;
            break;
        }
    }

    return(
        <div>
            <Header></Header>

            {selected_category.description}

            <Routes>
                <Route path="/register/main" element={<Register_main/>}></Route>
                <Route path="/register/user" element={<Register_user/>}></Route>
                <Route path="/register/company" element={<Register_company/>}></Route>
            </Routes>


            <Footer></Footer>
        </div>
    )
}

export default Register;