import React, {useEffect, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';
import './register.css';
import axios from "axios";
import Post from "./modals/post";

function Register_main(){
    return(
        <div className="register_main_container">
                            <div className="register_box"><strong>회원가입</strong></div>
                <hr className="sun"size="3" width="105%" color="black"/>

                  
                <div className="company_img">

                     <img className="company_image"src={require("./img/join_person.png")}/>
                     <div className="bigtxt">개인회원</div>
                     <div className="smalltxt">설명</div>
                     <div className="register_main_item_div register_main_left"> <Link to="/register/user"  className="register_main_item">가입하기</Link></div>
                     </div>

                <div className="sidetosidemargin">&nbsp;</div>


                <div className="person_img">
                     <img className="person_image"src={require("./img/join_company.png")}/>
                     <div className="bigtxt">기업회원</div>
                     <div className="smalltxt">설명</div>
                     <div className="register_main_item_div register_main_right"> <Link to="/register/company" className="register_main_item">가입하기</Link></div>
                     </div>

        </div>
        
    )
}
function Register_user(){

    const baseUrl = "http://localhost:8080";

    const navigate = useNavigate();

    const[enroll_user, setEnroll_user] = useState({
        userName:'',
        birth:'',
        phoneNumber:'',
        userId:'',
        password:'',
        email:'',
        role:'U',
    });

    const[code, setCode] = useState();
    const[succesCode, setSuccesCode] = useState();

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
    const [isemailCert, setIsemailCert] = useState(false);

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
            if(e.target.value.length !== 8){
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
                } else if ((dtMonth === 4 || dtMonth === 6 || dtMonth === 9 || dtMonth === 11) && dtDay === 31) {
                    setBirthmessage('일을 잘못 입력하셨습니다.');
                    setIsbirth(false);
                } else if (dtMonth === 2) {
                    var isleap = (dtYear % 4 === 0 && (dtYear % 100 !== 0 || dtYear % 400 === 0));
                    if (dtDay > 29 || (dtDay === 29 && !isleap)) {
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

        //비밀번호 유효성 검사//
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

        if(e.target.name === 'code'){
            setCode(e.target.value);
        }

        setEnroll_user({
            ...enroll_user,
            [e.target.name]:e.target.value,
        });
    }

    //회원가입 누르면 작동되는 코드
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(enroll_user);



        if(!isemailCert){
            alert("이메일 인증을 하세요");
        }

        if(isname && isbirth && isphone && isuserId && ispassword && isemail &&isemailCert){
            await axios
                .post(baseUrl + "/register/user", enroll_user)
                .then((response) =>{
                    console.log("회원가입 성공");
                    navigate("/login");
                })
                .catch((error) => {
                    console.log(error);
                })
        }else{
            alert("올바른 입력을 해주세요");
        }

    }

    //아이디 중복성 검사
    const userid_check = async (e) => {
        e.preventDefault();
        console.log(enroll_user.userId);
        await axios
            .post(baseUrl + "/register/check", {
                inputId:enroll_user.userId,
            })
            .then((response) =>{

                // 데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                if(response.data.returnvalue === '0'){
                    console.log("아이디 중복성 검사 성공");
                    setUserIdmessage("올바른 형식입니다. 중복성 검사가 완료되었습니다.")
                    setIsuserId(true);
                }else{
                    alert("중복된 아이디 입니다. 다른 아이디를 입력하세요")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //이메일 인증 발송
    const email_cert = async (e) => {
        e.preventDefault();
        console.log(enroll_user.email);
        alert("이메일 발송 눌림");
        await axios
            .post(baseUrl + "/email/cert", {
                email:enroll_user.email,
            })
            .then((response) =>{

                // 데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                if(response.data.response !== null){
                    alert("이메일을 발송하였습니다." + response.data.response);
                }else{
                    alert("올바른 이메일이 아닙니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //이메일 인증 코드 확인
    const email_check = async (e) => {
        e.preventDefault();

        setIsemailCert(true);

        alert("코드 확인 눌림");
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="user_enroll_form">

                    <div className="register_box"><strong>회원가입</strong></div>
                    <hr className="sun"size="3" width="105%" color="black"/>

                    <div className="modecontainer">
                    <Link to="/register/user" style={{ textDecoration: 'none' }}><span className="userregister">개인</span></Link>
                      <Link to="/register/company" style={{ textDecoration: 'none' }}><span className="companyregister">기업</span></Link>
                    </div>

                <div className="register_info"><strong>회원 정보</strong></div>
                <div className="tt">
                <p>이름 : </p> <div className="sd"> <input className="user_enroll_text" placeholder="유저이름"  type="text" required={true} name="userName" onChange={handleInput}/>
                   </div></div>{<div className="ad1">{nameMessage}</div>}
                    
                <div className="tt"><p>생년월일 :</p><div className="sd"> <input className="user_enroll_text" placeholder="생년월일"  type="text" required={true} name="birth" onChange={handleInput}/>
                    </div></div> {<div className="ad2">{birthMessage}</div>}

                <div className="tt">
                    <p>휴대폰번호 :</p> <div className="sd">  <input className="user_enroll_text" placeholder="휴대폰 번호"  type="text" required={true} name="phoneNumber" onChange={handleInput} value={enroll_user.phoneNumber}/>
                   </div></div> <div className="ad3">{phoneMessage}</div>
                
                <div className="register_info"><strong>로그인 정보</strong></div>
                
                <div className="tt"><p>아이디 :</p>
                <div className="sd">  <input className="user_enroll_text" placeholder="아이디"  type="text" required={true} name="userId" onChange={handleInput}/>                   
                </div><div><button className="availability" onClick={userid_check}>중복 확인</button></div></div>{<div className="ad4">{userIdMessage}</div>} 

                <div className="tt"><p>비밀번호 :</p>
                <div className="sd">  <input className="user_enroll_text" placeholder="비밀번호"  type="text" required={true} name="password" onChange={handleInput}/>
                    
                </div></div>{<div className="ad5">{passwordMessage}</div>}

                <div className="tt"><p>이메일 :</p>
                <div className="sd">   <input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/>

                </div><button className="emailValidate" onClick={email_cert}>코드 발송</button></div>

                <div className="tt"><p>인증번호 :</p>
                    <div className="sd">   <input className="user_enroll_text" placeholder="이메일 인증번호"  type="text" required={true} name="code" onChange={handleInput}/>

                    </div><button className="emailValidate" onClick={email_check}>확인</button></div>


                <div className="submit_locate"><button type="submit">회원가입</button></div>
            </form>
        
        </div>
    )
}
function Register_company(){

    const baseUrl = "http://localhost:8080";

    const[enroll_company, setEnroll_company] = useState({
        enterpriseName:'',
        enterpriseNumber:'',
        address:'',
        enterpriseId:'',
        password:'',
        phoneNumber:'',
        email:'',
        bankName:'',
        accountNumber:'',
        role:'E',
    });

    const[company_check, setConpany_check] = useState({
        enterpriseNumber:'',
        enterpriseRepresentName : '',
        enterpriseBirth : '',
    })

    const [nameMessage, setNamemessage] = useState('이름은 1 글자 이상으로 작성해 주세요');
    const [numMessage, setNummessage] = useState('사업자번호 형식으로 입력 해 주세요. (10자리)');
    const [phoneMessage, setPhonemessage] = useState("유효하지 않은 휴대폰 번호입니다.");
    const [enterpriseIdMessage, setenterpriseIdmessage] = useState('유저아이디는 6글자 이상으로 작성해 주세요');
    const [passwordMessage, setPasswordmessage] = useState('비밀전호는 8글자 이상으로 작성해 주세요');
    const [emailMessage, setEmailmessage] = useState("이메일이 올바른 형식이 아닙니다.");
    const [addressMessage, setaddressmessage] = useState("입력하세요");
    const [accountNumberMessage, setaccountNumbermessage] = useState("계좌번호와 은행을 입력하세요");
    const [bankNameMessage, setBanknamemessage] = useState();
    const [emailCode, setEmailCode] = useState();

    const [isname, setIsname] = useState(false);
    const [isnum, setIsnum] = useState(false);
    const [isphone, setIsphone] = useState(false);
    const [isenterpriseId, setIsenterpriseId] = useState(true);
    const [ispassword, setIspassword] = useState(false);
    const [isemail, setIsemail] = useState(false);
    const [isaddress, setIsaddress] = useState(false);
    const [isaccountNumber, setIsacounternumbermessage] = useState(false);
    const [isbankname, setIsbankname] = useState(false);

    const [isnumAuth, setIsnumAuth] = useState(false);  //사업자 진위여부 확인이 되었는지 안되어있는지 확인하는 변수
    const [isEmailCode, setIsEmailCode] = useState(false);  //이메일 코드 확인이 되었는지 안되어있는지 확인하는 변수

    const [popup, setPopup] = useState(false);  //팝업

    //은행이름 유효성 검사
    useEffect(() => {
        setIsbankname(true);
    },[enroll_company.bankName]);

    //주소 유효성 검사
    useEffect(() => {
        if(enroll_company.address === ''){
            setaddressmessage("우편번호 찾기를 통해 주소를 입력해주세요")
            setIsaddress(false);
        }else{
            setaddressmessage("올바른 형식입니다.")
            setIsaddress(true);
        }
    },[enroll_company.address]);

    //사업자 진위 여부 폼 입력 시 변경되는 사항
    const companyHandleInput = (e) => {
        if(e.target.name === 'enterpriseNumber'){
            handleInput(e);
        }

        setConpany_check({
            ...company_check,
            [e.target.name]:e.target.value,
        });

    }

    //사업자 진위 여부 정보 보내기
    const company_check_submit = async (e) => {
        e.preventDefault();

        console.log("사업자 확인을 위해 필요한 정보");
        console.log(company_check);

        await axios
            .post(baseUrl + "/register/company/auth", company_check)
            .then((response) =>{
                console.log(response.data);
                if(response.data.message === 'Success'){
                    alert("진위 여부 확인 보내기 성공");
                    setNummessage('사업자 번호 진위 여부 확인이 완료되었습니다.');
                    setIsnumAuth(true);
                }else if(response.data.message === 'Duplicate'){
                    alert("중복된 사업자 번호입니다. 아이디를 찾아주세요");
                } else{
                    alert("올바르지 않은 사업자 정보 입니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //폼 입력시 변경되는 사항
    const handleInput = (e)=>{
        e.preventDefault();
        console.log("handleInput 실행");
        console.log(e.target.value);

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
            if(e.target.value.length != 10){
                setNummessage('사업자번호 형식으로 입력 해 주세요.(10자리)');
                setIsnum(false);
            }else{
                const regsplitNum = e.target.value.replace(/-/gi, '').split('').map(function(item) {
                    return parseInt(item, 10);
                });

                const regkey = [1, 3, 7, 1, 3, 7, 1, 3, 5];
                let regNumSum = 0;
                for (var i = 0; i < regkey.length; i++) {
                    regNumSum += regkey[i] * regsplitNum[i];
                }
                regNumSum += parseInt((regkey[8] * regsplitNum[8]) / 10, 10);
                const regCheck = (Math.floor(regsplitNum[9])) === ((10 - (regNumSum % 10) ) % 10);

                if(regCheck){
                    setNummessage('올바른 형식 입니다.');
                    setIsnum(true);
                }else{
                    setNummessage('사업자 번호가 유효하지 않습니다.');
                    setIsnum(false);
                }


            }
        }

        //휴대폰 인증
        if(e.target.name === 'phoneNumber'){
            const regex = /^[0-9\b -]{0,13}$/;
            if (regex.test(e.target.value)) {
                setPhonemessage('올바른 형식 입니다.');
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

        //계좌 & 은행 유효송 검사
        if( e.target.name === 'accountNumber'){
            if( enroll_company.accountNumber.length < 1 || !isbankname){
                    setaccountNumbermessage("계좌번호와 은행을 입력하세요");
                    setIsacounternumbermessage(false);
            }else{
                    setaccountNumbermessage("올바른 입력입니다");
                    setIsacounternumbermessage(true);
            }
        }else if(e.target.name === 'bankName'){
            if( enroll_company.accountNumber.length < 1 || !isbankname){
                setaccountNumbermessage("계좌번호와 은행을 입력하세요");
                setIsacounternumbermessage(false);
            }else{
                setaccountNumbermessage("올바른 입력입니다");
                setIsacounternumbermessage(true);
            }
        }

        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        });
    }

    const navigate = useNavigate();
    //회원가입 누를 시 작동 코드
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(enroll_company);

        if(!isnumAuth){
            alert("사업자 진위 여부 확인은 완료하세요");
            return;
        }

        if(!isEmailCode){
            alert("이메일 인증코드 확인을 해주세요");
            return;
        }

        if(isname && isnum && isphone && isenterpriseId && ispassword && isemail && isaddress && isaccountNumber && isbankname){
            await axios
                .post(baseUrl + "/register/company", enroll_company)
                .then((response) =>{
                    console.log(response.data);
                    console.log("회원가입 성공");
                    if(response.data.message === 'Success'){
                        navigate('/login');
                    }else{
                        alert("오류났습니다.");
                    }
                })
                .catch((error) => {
               console.log(error);
                })
        }else{
            alert(" 올바른 입력을 넣어주세요");
        }

    }

    //회사 아이디 중복성 검사
    const enterpriseId_check = async (e) => {
        e.preventDefault();
        console.log(enroll_company.enterpriseId);
        await axios
            .post(baseUrl + "/register/company/check", {
                enterpriseId: enroll_company.enterpriseId,
            })
            .then((response) => {
                //데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                if(response.data.returnvalue === '0'){
                    console.log("아이디 중복성 검사 완료");
                    setenterpriseIdmessage("올바른 형식입니다. 중복성 검사가 완료되었습니다.")
                    setIsenterpriseId(true);
                }else{
                    alert("중복된 아이디 입니다. 다른 아이디를 입력하세요")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //주소 팝업 변경
    const handleComplete = (data) => {
        setPopup(!popup);
    }

    //이메일 인증 발송
    const email_cert = async (e) => {
        e.preventDefault();
        console.log(enroll_company.email);
        alert("이메일 발송 눌림");
        await axios
            .post(baseUrl + "/email/cert", {
                email:enroll_company.email,
            })
            .then((response) =>{

                // 데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                if(response.data.response !== null){
                    alert("이메일을 발송하였습니다." + response.data.response);
                    setEmailCode(response.data.response);
                }else{
                    alert("올바른 이메일이 아닙니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //이메일 인증 코드 확인
    const email_check = async (e) => {
        e.preventDefault();

        console.log(emailCode);

        await axios
            .post(baseUrl + "/email/check", {
                code:emailCode,
            })
            .then((response) =>{
                // 데이터 잘 받아왔으면 할거 어떤 값 뭐라 받는거보고 결정
                if(response.data.message === 'Success'){
                    alert("이메일 코드 성공적으로 입력함");
                    setIsEmailCode(true);
                }else{
                    alert("올바르지 않은 이메일 코드입니다. 다시 이메일을 확인해 주세요");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //이메일 인증 코드 확인
    const ent_email_check = async (e) => {
        e.preventDefault();

        setIsEmailCode(true);

        alert("코드 확인 눌림");
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="user_enroll_form">

            <div className="register_box"><strong>회원가입</strong></div>
                    <hr className="sun"size="3" width="105%" color="black"/>

                    <div className="modecontainer">
                      <Link to="/register/user" style={{ textDecoration: 'none' }}><span className="userregister1">개인</span></Link>
                      <Link to="/register/user" style={{ textDecoration: 'none' }}><span className="companyregister1">기업</span></Link>
                    </div>

                    <div className="register_info"><strong>회원 정보</strong></div>


                <div className="tt">
                    <p>회사명 :</p> <div className="sd"><input className="user_enroll_text" placeholder="회사명"  type="text" required={true} name="enterpriseName" onChange={handleInput}/>
                    </div></div>{<div className="ad1">{nameMessage}</div>}

                <div className="tt">
                    <p>사업자번호 :</p> <div className="sd"><input className="user_enroll_text" placeholder="사업자번호"  type="text" required={true} name="enterpriseNumber" onChange={companyHandleInput}/>
                    </div></div>{<div className="ad6">{numMessage}</div>}
                <div className="tt">
                    <p>대표자명 :</p> <div className="sd"><input className="user_enroll_text" placeholder="대표자명"  type="text" required={true} name="enterpriseRepresentName" onChange={companyHandleInput}/>
                </div></div>
                <div className="tt">
                    <p>개업일자 :</p> <div className="sd"><input className="user_enroll_text" placeholder="개업일자(20150405 - 8자리로 입력해 주세요)"  type="text" required={true} name="enterpriseBirth" onChange={companyHandleInput}/>
                </div><button className="emailValidate" onClick={company_check_submit}>사업자 진위 여부 확인</button></div>
                <br/>
                <div className="tt">
                    <p>휴대폰번호 :</p> <div className="sd"><input className="user_enroll_text" placeholder="휴대폰 번호"  type="text" required={true} name="phoneNumber" onChange={handleInput} value={enroll_company.phoneNumber}/>
                    </div></div>{<div className="ad3">{phoneMessage}</div>}

                <div className="tt" > 
                    <p>주소 :</p> <input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                    <button className="post_container" onClick={handleComplete}>우편번호 찾기</button>
                    </div>
                    <div className="ad7">{addressMessage}
                    
                    {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}</div>
                
                
                <div className="tt">
                    <p>계좌번호 :</p> <input className="user_enroll_text" placeholder="계좌번호"  type="text" required={true} name="accountNumber" onChange={handleInput} value={enroll_company.accountNumber}/>
                    
                    <div className="bank_container">
                    <select name="bankName" onChange={handleInput}>
                        <option value="none"> 은행 </option>
                        <option value="우리은행">우리은행</option>
                        <option value="KB국민은행">KB국민은행</option>
                        <option value="신한은행">신한은행</option>
                        <option value="하나은행">하나은행</option>
                        <option value="NH농협은행">NH농협은행</option>
                        <option value="Sh수협은행">Sh수협은행</option>
                        <option value="SC제일은행">SC제일은행</option>
                        <option value="한국씨티은행">한국씨티은행</option>
                    </select></div>
                </div><div className="ad8">{accountNumberMessage}</div>

                <div className="register_info"><strong>로그인 정보</strong></div>
                <div className="tt">
                <p>아이디 :</p> <div className="sd"> <input className="user_enroll_text" placeholder="아이디"  type="text" required={true} name="enterpriseId" onChange={handleInput}/>
                    </div><button className="availability1" onClick={enterpriseId_check}>중복성 검사</button></div>{<div className="ad4">{enterpriseIdMessage}</div>}
                    
                
                <div className="tt">
                <p>비밀번호 :</p> <div className="sd"><input className="user_enroll_text" placeholder="비밀번호"  type="text" required={true} name="password" onChange={handleInput}/>
                </div></div>{<div className="ad5">{passwordMessage}</div>}

                {/*<div className="tt">*/}
                {/*<p>이메일 :</p> <div className="sd"><input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/>*/}
                {/*    </div></div>{<div className="ad3">{emailMessage}</div>}*/}


                <div className="tt"><p>이메일 :</p>
                    <div className="sd">   <input className="user_enroll_text" placeholder="이메일"  type="text" required={true} name="email" onChange={handleInput}/>

                    </div><button className="emailValidate" onClick={email_cert}>코드 발송</button></div>
                {<div className="ad3">{emailMessage}</div>}

                <div className="tt"><p>인증번호 :</p>
                    <div className="sd">   <input className="user_enroll_text" placeholder="이메일 인증번호"  type="text" required={true} name="code" onChange={handleInput}/>

                    </div><button className="emailValidate" onClick={ent_email_check}>확인</button></div>

                {/**/}
                
                <div className="submit_locate"><button type="submit">회원가입</button></div>
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

    var selected_category ={
        title : 'sorry',
        description : "no page",
    }

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