import React, {useEffect, useState} from "react";
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
        userName:'',
        birth:'',
        phoneNumber:'',
        userId:'',
        password:'',
        email:'',
        role:'U',
    });

    const [nameMessage, setNamemessage] = useState('이름은 2 글자 이상으로 작성해 주세요');
    const [birthMessage, setBirthmessage] = useState('날짜를 20200101 형식으로 입력 해 주세요.');
    const [phoneMessage, setPhonemessage] = useState("유효하지 않은 휴대폰 번호입니다.");
    const [userIdMessage, setUserIdmessage] = useState('유저아이디는 6글자 이상으로 작성해 주세요');
    const [passwordMessage, setPasswordmessage] = useState('비밀전호는 8글자 이상으로 작성해 주세요');
    const [emailMessage, setEmailmessage] = useState("이메일이 올바른 형식이 아닙니다.");

    const [isname, setIsname] = useState(false);
    const [isbirth, setIsbirth] = useState(false);
    const [isphone, setIsphone] = useState(false);
    const [isuserId, setIsuserId] = useState(false);
    const [ispassword, setIspassword] = useState(false);
    const [isemail, setIsemail] = useState(false);

    //휴대폰 하이픈 작동
    // useEffect(() => {
    //     console.log("휴대폰 하이픈 작동");
    //     if(enroll_user.phoneNumber.length === 11){
    //         setEnroll_user({
    //             ...enroll_user,
    //             phoneNumber: enroll_user.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    //         })
    //     }
    //     else if (enroll_user.phoneNumber.length === 13) {
    //         setEnroll_user({
    //             ...enroll_user,
    //             phoneNumber: enroll_user.phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    //         })
    //     }
    //     console.log(enroll_user);
    // }, [enroll_user.phoneNumber])

    //form text바뀌면 작동하는 코드
    const handleInput = (e)=>{
        e.preventDefault();

        //아이디 이름 유효성 검사
        if(e.target.name === 'userName'){
            if(e.target.value.length < 2){
                setNamemessage('이름은 2글자 이상으로 작성해 주세요');
                setIsname(false);
            }else{
                setNamemessage('올바른 형식입니다.');
                setIsname( true);
            }
        }

        //생년월일 유효성 검사
        if(e.target.name === 'birth'){
            if(e.target.value.length != 8){
                setBirthmessage('날짜를 20200101 형식으로 입력 해 주세요.');
                setIsbirth(false);
            }else{

                const rxDatePattern = /^(\d{4})(\d{1,2})(\d{1,2})$/;
                const dtArray = e.target.value.match(rxDatePattern);

                //0번째는 원본 , 1번째는 yyyy(년) , 2번재는 mm(월) , 3번재는 dd(일) 입니다.
                const dtYear = dtArray[1];
                const dtMonth = dtArray[2];
                const dtDay = dtArray[3];

                //yyyymmdd 체크
                if (dtMonth < 1 || dtMonth > 12) {
                    setBirthmessage('월을 잘못 입력하셨습니다.');
                    setIsbirth(false);
                }else if (dtDay < 1 || dtDay > 31) {
                    setBirthmessage('일을 잘못 입력하셨습니다.');
                    setIsbirth(false);
                } else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) {
                    setBirthmessage('일을 잘못 입력하셨습니다.');
                    setIsbirth(false);
                } else if (dtMonth == 2) {
                    var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
                    if (dtDay > 29 || (dtDay == 29 && !isleap)) {
                        setBirthmessage('일을 잘못 입력하셨습니다.');
                        setIsbirth(false);
                    }
                }else{
                    setBirthmessage('올바른 형식 입니다.');
                    setIsbirth(true);
                }


            }
        }

        //휴대폰 인증
        if(e.target.name === 'phoneNumber'){
            const regex = /^[0-9\b -]{0,13}$/;
            if (regex.test(e.target.value)) {
                setPhonemessage("유효한 유대폰 번호입니다.");
                setIsphone(true);
            }
        }

        //유저 아이디 유효성 검사
        if(e.target.name === 'userId'){
            if(e.target.value.length < 6){
                setUserIdmessage('유저아이디는 6글자 이상으로 작성해 주세요');
                setIsuserId(false);
            }else{
                setUserIdmessage('올바른 형식입니다. 중복성 검사를 확인하세요');
                setIsuserId( false);
            }
        }

        //비밀번호 유효성 검사
        if(e.target.name === 'password'){
            if(e.target.value.length < 8){
                setPasswordmessage('비밀전호는 8글자 이상으로 작성해 주세요');
                setIspassword(false);
            }else{
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

                if (!passwordRegex.test(e.target.value)) {
                    setPasswordmessage('숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요');
                    setIspassword( false);
                } else {
                    setPasswordmessage('올바른 형식입니다.');
                    setIspassword( true);
                }

            }
        }

        //이메일 유효성 검사
        if(e.target.name === 'email'){

            const emailRegex =
                /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if(!emailRegex.test(e.target.value)){
                setEmailmessage("이메일이 올바른 형식이 아닙니다.");
                setIsemail(false);
            }else{
                setEmailmessage("올바른 형식입니다.");
                setIsemail(true);
            }
        }

        setEnroll_user({
            ...enroll_user,
            [e.target.name]:e.target.value,
        });

        console.log("...enroll_user" + {...enroll_user});
        console.log("enroll)user" + enroll_user);
    }

    //인증코드 맞는지 확인하는 코드
    const handlesecret = (e) =>{
    }

    //회원가입 누르면 작동되는 코드
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

    //아이디 중복성 검사
    const userid_check = async (e) => {
        e.preventDefault();
        console.log(enroll_user.userId);
        await axios
            .post(baseUrl + "/register/user", {
                userId:enroll_user.id,
            })
            .then((response) =>{
                console.log(response.data);
                //데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                // if(response.data.id === enroll_user.id){
                //     setUserIdmessage("올바른 형식입니다. 중복성 검사가 완료되었습니다.")
                //     setIsuserId(true);
                // }else{
                //     alert("중복된 아이디 입니다. 다른 아이디를 입력하세요")
                // }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="user_enroll_form">
                <div><p>username
                    <input className="user_enroll_text" placeholder="유저이름"  type="text" required={true} name="userName" onChange={handleInput}/>
                    {<span>{nameMessage}</span>}</p></div>
                <div><p>birth
                    <input className="user_enroll_text" placeholder="생년월일"  type="text" required={true} name="birth" onChange={handleInput}/>
                    {<span>{birthMessage}</span>}</p></div>
                <div><p>phone
                    <input className="user_enroll_text" placeholder="휴대폰 번호"  type="text" required={true} name="phoneNumber" onChange={handleInput} value={enroll_user.phoneNumber}/>
                    <span>{phoneMessage}</span>}</p></div>
                <div><p>userid
                    <input className="user_enroll_text" placeholder="아이디"  type="text" required={true} name="userId" onChange={handleInput}/>
                    {<span>{userIdMessage}</span>}
                    <button onClick={userid_check}>중복성 검사</button>
                </p></div>
                <div><p>password
                    <input className="user_enroll_text" placeholder="비밀번호"  type="text" required={true} name="password" onChange={handleInput}/>
                    {<span>{passwordMessage}</span>}
                </p></div>
                <div><p>email
                    <input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/>
                    {<span>{emailMessage}</span>}
                </p></div>
                <div><button type="submit">회원가입</button></div>
            </form>

        </div>
    )
}
function Register_company(){

    const baseUrl = "http://localhost:8080";

    const[enroll_company, setEnroll_company] = useState({
        enterpriseName:'',
        enterpriseNumber:'',
        phoneNumber:'',
        address:'',
        accountNumber:'',
        bankName:'',
        enterpriseId:'',
        password:'',
        email:'',
        role:'E',
    });

    const [nameMessage, setNamemessage] = useState('이름은 1 글자 이상으로 작성해 주세요');
    const [numMessage, setNummessage] = useState('사업자번호 형식으로 입력 해 주세요.');
    const [phoneMessage, setPhonemessage] = useState("유효하지 않은 휴대폰 번호입니다.");
    const [enterpriseIdMessage, setenterpriseIdmessage] = useState('유저아이디는 6글자 이상으로 작성해 주세요');
    const [passwordMessage, setPasswordmessage] = useState('비밀전호는 8글자 이상으로 작성해 주세요');
    const [emailMessage, setEmailmessage] = useState("이메일이 올바른 형식이 아닙니다.");
    const [addressMessage, setaddressmessage] = useState("입력해라");
    const [accountNumberMessage, setaccountNumbermessage] = useState("입력해라");
    const [bankNameMessage, setBanknamemessage] = useState();

    const [isname, setIsname] = useState(false);
    const [isnum, setIsnum] = useState(false);
    const [isphone, setIsphone] = useState(false);
    const [isenterpriseId, setIsenterpriseId] = useState(false);
    const [ispassword, setIspassword] = useState(false);
    const [isemail, setIsemail] = useState(false);
    const [isaddress, setIsaddress] = useState(false);
    const [isaccountNumber, setIsacounternumbermessage] = useState(false);
    const [isbankname, setIsbankname] = useState(false);

    //폼 입력시 변경되는 사항
    const handleInput = (e)=>{
        e.preventDefault();
        console.log("??");

        //아이디 이름 유효성 검사
        if(e.target.name === 'enterpriseName'){
            if(e.target.value.length < 2){
                setNamemessage('이름은 1글자 이상으로 작성해 주세요');
                setIsname(false);
            }else{
                setNamemessage('올바른 형식입니다.');
                setIsname( true);
            }
        }

        //사업자 번호 유효성 검사
        if(e.target.name === 'enterpriseNumber'){
            if(e.target.value.length != 8){
                setNummessage('사업자번호 형식으로 입력 해 주세요.');
                setIsnum(false);
            }else{
                    setNummessage('올바른 형식 입니다.');
                    setIsnum(true);
            }
        }

        //휴대폰 인증
        if(e.target.name === 'phoneNumber'){
            const regex = /^[0-9\b -]{0,13}$/;
            if (regex.test(e.target.value)) {
                setPhonemessage("유효한 유대폰 번호입니다.");
                setIsphone(true);
            }
        }

        //유저 아이디 유효성 검사
        if(e.target.name === 'enterpriseId'){
            if(e.target.value.length < 6){
                setenterpriseIdmessage('기업아이디는 6글자 이상으로 작성해 주세요');
                setIsenterpriseId(false);
            }else{
                setenterpriseIdmessage('올바른 형식입니다. 중복성 검사를 확인하세요');
                setIsenterpriseId( false);
            }
        }

        //비밀번호 유효성 검사
        if(e.target.name === 'password'){
            if(e.target.value.length < 8){
                setPasswordmessage('비밀전호는 8글자 이상으로 작성해 주세요');
                setIspassword(false);
            }else{
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

                if (!passwordRegex.test(e.target.value)) {
                    setPasswordmessage('숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요');
                    setIspassword( false);
                } else {
                    setPasswordmessage('올바른 형식입니다.');
                    setIspassword( true);
                }

            }
        }

        //이메일 유효성 검사
        if(e.target.name === 'email'){

            const emailRegex =
                /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if(!emailRegex.test(e.target.value)){
                setEmailmessage("이메일이 올바른 형식이 아닙니다.");
                setIsemail(false);
            }else{
                setEmailmessage("올바른 형식입니다.");
                setIsemail(true);
            }
        }

        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        });
    }

    //회원가입 누를 시 작동 코드
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

    //회사 아이디 중복성 검사
    const enterpriseId_check = async (e) => {
        e.preventDefault();
        console.log(enroll_company.enterpriseId);
        await axios
            .post(baseUrl + "/register/company", {
                enterpriseId: enroll_company.id,
            })
            .then((response) => {
                console.log(response.data);
                //데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                // if(response.data.id === enroll_company.id){
                //     setenterpriseIdmessage("올바른 형식입니다. 중복성 검사가 완료되었습니다.")
                //     setIsenterpriseId(true);
                // }else{
                //     alert("중복된 아이디 입니다. 다른 아이디를 입력하세요")
                // }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="user_enroll_form">
                <div><p>enterpriseName
                    <input className="user_enroll_text" placeholder="회사명"  type="text" required={true} name="enterpriseName" onChange={handleInput}/>
                    {<span>{nameMessage}</span>}</p></div>
                <div><p>enterpriseNumber
                    <input className="user_enroll_text" placeholder="사업자번호"  type="text" required={true} name="enterpriseNumber" onChange={handleInput}/>
                    {<span>{numMessage}</span>}</p></div>
                <div><p>phone
                    <input className="user_enroll_text" placeholder="휴대폰 번호"  type="text" required={true} name="phoneNumber" onChange={handleInput} value={enroll_company.phoneNumber}/>
                    <span>{phoneMessage}</span>}</p></div>
                <div><p>address
                    <input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                    <span>{addressMessage}</span>}</p></div>
                <div><p>accountNumber
                    <input className="user_enroll_text" placeholder="계좌번호"  type="text" required={true} name="accountNumber" onChange={handleInput} value={enroll_company.accountNumber}/>
                    <span>{accountNumberMessage}</span>}</p></div>
                <div><p>bankName
                    <input className="user_enroll_text" placeholder="은행이름"  type="text" required={true} name="bankName" onChange={handleInput} value={enroll_company.bankName}/>
                    <span>{bankNameMessage}</span>}</p></div>
                <div><p>enterpriseId
                    <input className="user_enroll_text" placeholder="아이디"  type="text" required={true} name="enterpriseId" onChange={handleInput}/>
                    {<span>{enterpriseIdMessage}</span>}
                    <button onClick={enterpriseId_check}>중복성 검사</button>
                </p></div>
                <div><p>password
                    <input className="user_enroll_text" placeholder="비밀번호"  type="text" required={true} name="password" onChange={handleInput}/>
                    {<span>{passwordMessage}</span>}
                </p></div>
                <div><p>email
                    <input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/>
                    {<span>{emailMessage}</span>}
                </p></div>
                <div><button type="submit">회원가입</button></div>
            </form>

        </div>
    )
}

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