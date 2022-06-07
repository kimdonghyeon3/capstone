import React, {useContext, useEffect, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';
import './mypage.css';
import {Userlogin} from "./userinfo";
import axios from "axios";
import ProductCreate from "./producdtCreate";

function ProductManageHTML(props){

    const path = props.list.imageFilePath + props.list.imageFileName;
    const navigate = useNavigate();

    // console.log(path + " /// " +  typeof path);
    const productEdit = () => {
        const url = "/product/edit/" + props.list.pdid;
        console.log(url);
        navigate(url);
    }

    return(
        <div className="product_container">
            <div className="product">
                <div className="product_img_div"><Link className="product_link" target="_blank" to={"/product/detail/" + props.list.pdid}><img
                    src={require("./img/aa.jpg")}
                    className="product_img"/>
                </Link></div>
                <div className="product_txt">&nbsp; {props.list.productName}
                    <div>&nbsp;{props.list.detail}</div>
                    {/* <div>&nbsp;{"월"}</div> */}
                    <div>&nbsp;{props.list.price}</div>
                    <div><button className="company_product_enroll_btn1"type="button" onClick={productEdit}> 수정하기 </button></div>
                </div>
            </div>
        </div>
    )
}
//기업페이지
function Company_profile(){
    const baseUrl = "http://localhost:8080";

    const logininfo = useContext(Userlogin);    //전역변수 관리 변수

    const [companyinfo, setCompanyinfo] = useState({
        enid:localStorage.getItem("uid"),
    }); //프로필 정보가져오기 위한 uid

    const[companyprofile, setCompanyprofile] = useState({
        accountNumber:'',
        address:'',
        bankName:'',
        emailAddress:'',
        enterpriseID:'',
        enterpriseNumber:'',
        enterpriseName:'',
        password:'',
        phoneNumber:'',
    });    //프로필 정보 담을 변수

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getcompanyinfo();
    },[]);

    async function getcompanyinfo(){            //spring 연동 값 받아오기

        await axios
            .post(baseUrl + "/mypage/company/profile", companyinfo)
            .then((response) => {
                console.log(response.data);
                setCompanyprofile({
                    ...companyprofile,
                    accountNumber:response.data.accountNumber,
                    address:response.data.address,
                    bankName:response.data.bankName,
                    emailAddress:response.data.emailAddress,
                    enterpriseID:response.data.enterpriseID,
                    enterpriseName:response.data.enterpriseName,
                    enterpriseNumber:response.data.enterpriseNumber,
                    password:response.data.password,
                    phoneNumber:response.data.phoneNumber,
                })
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            <dl>
                <dt className="user_profile_dt"><label>아이디</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.enterpriseID}</span></dd>
                <dt className="user_profile_dt"><label>비밀번호</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.password}</span></dd>
                <dt className="user_profile_dt"><label>기업명</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.enterpriseName}</span></dd>
                <dt className="user_profile_dt"><label>사업자번호</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.enterpriseNumber}</span></dd>
                <dt className="user_profile_dt"><label>이메일</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.emailAddress}</span></dd>
                <dt className="user_profile_dt"><label>전화번호</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.phoneNumber}</span></dd>
                <dt className="user_profile_dt"><label>주소</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.address}</span></dd>
                <dt className="user_profile_dt"><label>계좌번호</label></dt>
                <dd className="user_profile_dd"><span>{companyprofile.accountNumber + " " + companyprofile.bankName}</span></dd>
            </dl>
        </div>
    )
}

function Company_edit(){
    const baseUrl = "http://localhost:8080";

    const logininfo = useContext(Userlogin);

    const [companyinfo, setCompanyinfo] = useState({
        enid:localStorage.getItem("uid"),
    });
    const[edit_company, setEdit_company] = useState({
        id:localStorage.getItem("uid"),
        e_name:'',
        e_address:'',
        e_password:'',
        e_phone:'',
        e_email:'',
        e_bankname:'',
        e_accountnumber:'',
    });

    useEffect(()=>{
        console.log("마이페이지 유저 정보 받아오기");
        getcompanyinfo();
    },[]);

    async function getcompanyinfo(){
        await axios
            .post(baseUrl + "/mypage/company/edit/get", companyinfo)
            .then((response) => {
                console.log(response.data);
                setEdit_company({
                    ...edit_company,
                    e_name:response.data.enterpriseName,
                    e_address:response.data.address,
                    e_password:response.data.password,
                    e_phone:response.data.phoneNumber,
                    e_email:response.data.emailAddress,
                    e_bankname:response.data.bankName,
                    e_accountnumber:response.data.accountNumber,
                })
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    const handleInput = (e)=>{
        e.preventDefault();

        setEdit_company({
            ...edit_company,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(edit_company);
            await axios
                .post(baseUrl + "/mypage/company/edit", edit_company)
                .then((response) =>{
                    console.log(response.data);
                    alert("회원 정보 수정을 완료했습니다.")
                })
                .catch((error) => {
                    console.log(error);
                })
    }

    return(

    <div>
        <form onSubmit={handleSubmit}>
        <dl>
            <dt className="user_profile_dt123"><label>기업명</label>            <dt className="bank_locate"><label>은행</label></dt></dt>
            <dd className="user_edit_dd123">
                <input className="user_profile_dd" placeholder={edit_company.e_name}  type="text" required={true} name="e_name" onChange={handleInput} value={edit_company.e_name}/>
                
                <dd className="user_edit_dd">
                <select className="bank_select" name="e_bankname" onChange={handleInput}>
                    <option value={edit_company.e_bankname}> {edit_company.e_bankname} </option>
                    <option value="우리은행">우리은행</option>
                    <option value="KB국민은행">KB국민은행</option>
                    <option value="신한은행">신한은행</option>
                    <option value="하나은행">하나은행</option>
                    <option value="NH농협은행">NH농협은행</option>
                    <option value="Sh수협은행">Sh수협은행</option>
                    <option value="SC제일은행">SC제일은행</option>
                    <option value="한국씨티은행">한국씨티은행</option>
                </select>            </dd>
                </dd>
            <dt className="user_profile_dt"><label>이메일</label></dt>
            <dd className="user_edit_dd">
                <input className="user_profile_dd" placeholder={edit_company.e_email} type="text" required={true} name="e_email" onChange={handleInput} value={edit_company.e_email}/>
                </dd>
            <dt className="user_profile_dt"><label>주소</label></dt>
            <dd className="user_edit_dd">
                <input className="user_profile_dd" placeholder={edit_company.e_address}  type="text" required={true} name="e_address" onChange={handleInput} value={edit_company.e_address}/>
                </dd>
            <dt className="user_profile_dt"><label>상담번호</label></dt>
            <dd className="user_edit_dd">
                <input className="user_profile_dd" placeholder={edit_company.e_phone}  type="text" required={true} name="e_phonenumber" onChange={handleInput} value={edit_company.e_phone}/>
                </dd>
            <dt className="user_profile_dt"><label>계좌번호</label></dt>
            <dd className="user_edit_dd">
                <input className="user_profile_dd" placeholder={edit_company.e_accountnumber}  type="text" required={true} name="e_accountnumber" onChange={handleInput} value={edit_company.e_accountnumber}/>
            </dd>
            <dt className="user_profile_dt"><label>비밀번호</label></dt>
            <dd className="user_edit_dd">
                <input className="user_profile_dd" placeholder={edit_company.e_password}  type="text" required={true} name="e_password" onChange={handleInput} value={edit_company.e_password}/>
            </dd>
            <button type="submit" className="user_edit_btn"> 기업정보 업데이트 </button>
            


        </dl>
        </form>
    </div>
    )
}

function Company_manage(){

    const navigate = useNavigate();

    const movecreate = () => {
        navigate("/product/create");
    }

    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductManageInfo();
    },[]);

    async function getProductManageInfo(){            //spring 연동 값 받아오기
        await axios
            .post(baseUrl + "/mypage/company/manage", {
                enid:localStorage.getItem("uid")
            })
            .then((response) => {
                console.log(response.data);
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            <div className="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductManageHTML list={list} key={list.pdid}></ProductManageHTML>
                    )
                }) : ""}
            </div>

            <div className="company_product_enroll_div">
                <button className="company_product_enroll_btn" onClick={movecreate}>상품 등록</button>
            </div>
        </div>
    )
}

function Deliver_table(props){
    const table = [];

    for(let i=0; i<props.deliver_list.length; i++){
        let t = props.deliver_list[i];
        table.push(<li key={t.title}>
            <div>{t.title}</div>
            <div>{t.body}</div>
        </li>)
    }

    return(
        <div>
            {table}
        </div>
    )
}

function Company_deliver(){

    const [mode, setMode] = useState('NORMAL');

    let deliver_li = null;

    const [deliver_list,setDeliver_list] = useState([
        {title:"운송장번호", body:"123456"}
    ])

    console.log("실행됨");
    if(mode === 'NORMAL'){
        console.log("nomal 실행됨");
        deliver_li = <Deliver_table deliver_list={deliver_list}></Deliver_table>
    }else if(mode === 'CREATE'){
        console.log("create 실행됨");
        deliver_li = <Deliver_table deliver_list={deliver_list}></Deliver_table>
    }

    return(
        <div>
            <h2 className="company_profile_h2"> 배송 조회</h2>
            <hr/>
            <form onSubmit={event=>{
                event.preventDefault();
                const deliver_num = event.target.deliver_number.value;
                const new_deliver_num = {title : "운송장번호", body:deliver_num};
                const new_deliver_list = [...deliver_list];
                new_deliver_list.push(new_deliver_num);
                setDeliver_list(new_deliver_list);
                setMode("CREATE");
            }}>
                <dl>
                    <dt className="user_profile_dt"><label>운송장 등록</label></dt>
                    <dd className="user_edit_dd"><input type="text"  name="deliver_number" placeholder="deliver_number"></input>
                        <button type="submit" className="user_edit_btn"> 등록 </button></dd>
                </dl>
            </form>
            <hr/>
                {deliver_li}
            <hr/>
        </div>
    )
}

function Company_withdraw(){

    const baseUrl = "http://localhost:8080";

    const userinfo = useContext(Userlogin);

    const navigate = useNavigate();

    const handleWithdraw = async () => {
        await axios
            .post(baseUrl + "/mypage/company/withdraw", {id:userinfo.uid,})
            .then((response) => {
                console.log(response.data);
                if(response.data.message === 'Success'){
                    console.log("Success");
                    alert("탈퇴 완료 // 로그아웃 합니다");
                    navigate("/category/main");
                    userinfo.edituser({
                        uid : '',
                        id : '',
                        role : '',
                        login : false,
                    });
                    console.log("??");
                    sessionStorage.clear();
                    localStorage.clear();
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <h2 className="user_profile_h2"> 회원 탈퇴</h2>
            <hr/>
            <h3 className="user_withdraw_guide"> 회원탈퇴 안내</h3>
            <div className="user_withdraw_text"> 1. 회원 재가입은 탈퇴 후 바로 간응합니다. 단, 탈퇴한 아이디는 본인과 타인 모두 재사용할 수 없습니다.</div>
            <div className="user_withdraw_text"> 2. 탈퇴 후 회원정보와 개인형 서비스가 아래와 같이 삭제되며 삭제된 데이터는 복구되지 않습니다.</div>
            <div className="user_withdraw_text strong"> - 회원 정보</div>
            <div className="user_withdraw_text strong"> - 구독 상품 정보</div>
            <div className="user_withdraw_text"> 탈퇴 후 문의주신 내용은 삭제되지 않고 유지됩니다. 문의 내용 삭제를 원하는 경우 반듯이 삭제 요청 후 탈퇴를 신청해주세요.</div>
            <hr/>
            <div className="user_withdraw_btn_div"><button className="user_withdraw_btn" onClick={handleWithdraw}> V 회원탈퇴</button></div>
        </div>
    )
}

const company_content=[
    {title:'profile', description:<Company_profile/>},
    {title:'edit', description:<Company_edit/>},
    {title:'manage', description:<Company_manage/>},
    {title:'deliver', description:<Company_deliver/>},
    {title:'product', description:<ProductCreate/>},
    {title:'withdraw', description:<Company_withdraw/>},
]

function Company(){
    <div className="user_navbar">
    <ul className="user_navbar_list">
        <h2 className="user_title">마이 페이지</h2>
        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/profile"> 프로필</Link></li>
        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/edit"> 프로필 수정</Link></li>
        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/manage"> 구독 관리</Link></li>
        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/bascket"> 장바구니</Link></li>
        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/withdraw"> 회원 탈퇴</Link></li>
    </ul>

</div>
    return(

        <div>
            <div className="user_container">
                <div className="user_navbar">
                    <ul className="user_navbar_list">
                    <h2 className="user_title"> 마이 페이지</h2>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/profile"> 기업 프로필</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/edit"> 기업 프로필 수정</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/manage"> 상품 관리</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/deliver"> 배송 조회</Link></li>
                        {/*<li className="user_navbar_li"><Link className="user_navbar_link" to="/product/create"> 상품 등록</Link></li>*/}
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/withdraw"> 회원 탈퇴</Link></li>
                    </ul>
                </div>

                <div className="user_content">
                    <Routes>
                        <Route path="/:company_nav/*" element={< Company_content/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

function Company_content(){
    var params = useParams();
    var user_nav = params.company_nav;
    var selected_category ={
        title : 'sorry',
        description : 'No script'
    }
    for(let i = 0 ; i < company_content.length ; i++){
        if(company_content[i].title === user_nav){
            selected_category = company_content[i];
            break;
        }
    }

    return(
        <div>
            <h2>{selected_category.description}</h2>
        </div>


    )
}

//유저페이지
function User_profile(){

    const baseUrl = "http://localhost:8080";

    const logininfo = useContext(Userlogin);

    const [userinfo, setUserinfo] = useState({
        enid:localStorage.getItem("uid"),
        enterpriseId:localStorage.getItem("id"),
        role:localStorage.getItem("role"),
    });

    const [userprofile, setUserprofile] = useState({});

    useEffect(()=>{
        console.log("마이페이지 유저 정보 받아오기");
        getuserinfo();
    },[]);

    async function getuserinfo(){

        await axios
            .post(baseUrl + "/mypage/user/profile", userinfo)
            .then((response) => {
                console.log(response.data);

                setUserprofile({
                    ...userprofile,
                    id : response.data.id,
                    birth : response.data.birth,
                    email : response.data.email,
                    password : response.data.password,
                    phoneNumber : response.data.phoneNumber,
                    role : response.data.role,
                    userYN : response.data.userYN,
                    userId : response.data.userId,
                    userName : response.data.userName,
                })
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            <dl>
                <dt className="user_profile_dt"><label>사용자명</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.userName}</span></dd>
                <dt className="user_profile_dt"><label>이메일</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.email}</span></dd>
                <dt className="user_profile_dt"><label>아이디</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.userId}</span></dd>
                <dt className="user_profile_dt"><label>비밀번호</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.password}</span></dd>
                <dt className="user_profile_dt"><label>생년월일</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.birth}</span></dd>
                <dt className="user_profile_dt"><label>전화번호</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.phoneNumber}</span></dd>
            </dl>
        </div>
    )
}

function User_edit(){

    const baseUrl = "http://localhost:8080";

    const [isuserId, setIsuserId] = useState(true);
    const [userId_btn, setUserId_btn] = useState("중복 확인");

    let userId_re = "";

    const [userinfo, setUserinfo] = useState({
        enid:localStorage.getItem("uid"),
        enterpriseId:localStorage.getItem("id"),
        role:localStorage.getItem("role"),
    });
    const[edit_user, setEdit_user] = useState({
        id:localStorage.getItem("uid"),
        phoneNumber:'',
        birth:'',
        userName:'',
        userId:'',
        password:'',
        email:'',
    });

    useEffect(()=>{
        console.log("마이페이지 유저 정보 받아오기");
        getcompanyinfo();
    },[]);

    async function getcompanyinfo(){
        await axios
            .post(baseUrl + "/mypage/user/profile", userinfo)
            .then((response) => {
                setEdit_user({
                    ...edit_user,
                    userName:response.data.userName,
                    phoneNumber:response.data.phoneNumber,
                    birth:response.data.birth,
                    userId:response.data.userId,
                    password:response.data.password,
                    email:response.data.email,
                })
                userId_re = response.data.userId;
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    const handleInput = (e)=>{
        e.preventDefault();

        if(e.target.name === 'userId'){
            if(e.target.value !== userId_re){
                setIsuserId(false)
                setUserId_btn("중복성 검사")
            }
        }

        setEdit_user({
            ...edit_user,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(edit_user);
        if(isuserId){
            await axios
                .post(baseUrl + "/mypage/user/edit", edit_user)
                .then((response) =>{
                    console.log(response.data);
                    alert("수정이 완료되었습니다.")
                })
                .catch((error) => {
                    console.log(error);
                })
        }else{
            alert("아이디 중복성 검사를 확인하세요");
        }

    }

    //아이디 중복성 검사
    const userid_check = async (e) => {
        e.preventDefault();
        console.log(edit_user.userId);
        await axios
            .post(baseUrl + "/register/check", {
                inputId:edit_user.userId,
            })
            .then((response) =>{

                if(response.data.returnvalue === '0'){
                    setUserId_btn("중복 검사 완료")
                    setIsuserId(true);
                }else{
                    alert("중복된 아이디 입니다. 다른 아이디를 입력하세요")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt className="user_profile_dt"><label>이메일</label></dt>
                    <dd><input className="user_profile_dd" placeholder={edit_user.email} type="text" required={true} name="email" onChange={handleInput} value={edit_user.email||''}/>
                    </dd>
                    <dt className="user_profile_dt"><label>아이디</label></dt>
                    <dd>
                        <input className="user_profile_dd" placeholder={edit_user.userId}  type="text" required={true} name="userId" onChange={handleInput} value={edit_user.userId||''}/>
                        <button className="profile_btn" type="button" onClick={userid_check}>{userId_btn}</button>
                    </dd>
                    <dt className="user_profile_dt"><label>비밀번호</label></dt>
                    <dd>
                        <input className="user_profile_dd" placeholder={edit_user.password}  type="text" required={true} name="password" onChange={handleInput} value={edit_user.password||''}/>
                    </dd>
                    <dt className="user_profile_dt"><label>전화번호</label></dt>
                    <dd>
                        <input className="user_profile_dd" placeholder={edit_user.phoneNumber}  type="text" required={true} name="phoneNumber" onChange={handleInput} value={edit_user.phoneNumber||''}/>
                    </dd>
                    <button type="submit" className="user_edit_btn"> 개인정보 업데이트 </button>
                </dl>
            </form>
        </div>
    )
}

function ProductSubscriptHTML(props){

    const baseUrl = "http://localhost:8080";
    const navigate = useNavigate();

    const handleClick = async () => {
        console.log("구독해지");

        await axios
            .post(baseUrl + "/mypage/user/manage/withdraw", {
                p_SSID: props.list.p_SSID,
            })
            .then((response) => {
                alert(response.data.p_ProductName + "이 구독해지되었습니다.");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return(
        <div className="manage_container">
                <div className="product_img_div"><Link className="product_link" to="/product/detail"><img src={require("./img/aa.jpg")} className="product_img1"/></Link></div>
                <div className="manage"> 상품명: {props.list.p_ProductName}
                    <div className="">상품설명: {props.list.p_Detail}</div>
                    {/* <div>{"월"}</div> */}
                    <div>가격 : {props.list.p_Price}</div>
                    <button className="cancel_btn"onClick={handleClick}>구독 해지</button>
            </div>
        </div>
    )
}

function User_manage(){

    const [subscriptList, setSubscriptList] = useState();

    const baseUrl = "http://localhost:8080";

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getUserSubscript();
    },[]);

    async function getUserSubscript(){            //spring 연동 값 받아오기
        await axios
            .post(baseUrl + "/mypage/user/manage", {
                p_USID:localStorage.getItem("uid"),
            })
            .then((response) => {
                setSubscriptList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>

            <div className="modecontainer">
            <Link to="/mypage/user/manage" style={{ textDecoration: 'none' }}><span className="nowscribe">현재 구독중인 상품</span></Link>
            <Link to="/mypage/user/manage" style={{ textDecoration: 'none' }}><span className="pastscribe">과거에 구독했던 상품</span></Link>
            </div>

            <div className="product_container_container">

            {subscriptList ? subscriptList.map( list => {
                return(
                    <ProductSubscriptHTML list={list} key={list.p_PDID}></ProductSubscriptHTML>
                )
            }) : ""}
            </div>
        </div>
    )
}

function ProductBasketHTML(props){

    const baseUrl = "http://localhost:8080";

    const handleClick = async () => {
        console.log("장바구니 해지");

        await axios
            .post(baseUrl + "/mypage/", {
                p_BSID: props.list.p_BSID,
            })
            .then((response) => {
                alert(response.data.p_ProductName + "이 장바구니에서 삭제되었습니다.");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return(
        <div className="manage_container">
                <div className="product_img_div"><Link className="product_link" to="/product/detail"><img src={require("./img/aa.jpg")} className="product_img1"/></Link></div>
                <div className="manage">상품명 : {props.list.p_ProductName}
                    <div>상품가격 :{props.list.p_Price}</div>
                    <button className="cancel_btn" onClick={handleClick}>장바구니 해지</button>
                </div>
            </div>
        
    )
}

function User_bascket(){
    const [subscriptList, setSubscriptList] = useState();

    const baseUrl = "http://localhost:8080";

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getUserSubscript();
    },[]);

    async function getUserSubscript(){            //spring 연동 값 받아오기
        await axios
            .post(baseUrl + "/mypage/user/basket", {
                p_USID:localStorage.getItem("uid"),
            })
            .then((response) => {
                setSubscriptList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            <div className="product_container_container">
                {subscriptList ? subscriptList.map( list => {
                    return(
                        <ProductBasketHTML list={list} key={list.p_PDID}></ProductBasketHTML>
                    )
                }) : ""}
            </div>
        </div>
    )
}

function User_withdraw(){
    const baseUrl = "http://localhost:8080";

    const userinfo = useContext(Userlogin);

    const navigate = useNavigate();

    const handleWithdraw = async () => {
        await axios
            .post(baseUrl + "/mypage/user/withdraw", {id:userinfo.uid,})
            .then((response) => {
                console.log(response.data);
                if(response.data.message === 'Success'){
                    console.log("Success");
                    alert("탈퇴 완료 // 로그아웃 합니다");
                    navigate("/category/main");
                    userinfo.edituser({
                        uid : '',
                        id : '',
                        role : '',
                        login : false,
                    });
                    sessionStorage.clear();
                    localStorage.clear();
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <h2 className="user_profile_h2"> 회원 탈퇴</h2>
            <hr/>
            <h3 className="user_withdraw_guide"> 회원탈퇴 안내</h3>
            <div className="user_withdraw_text"> 1. 회원 재가입은 탈퇴 후 바로 간으합니다. 단, 탈퇴한 아이디는 본인과 타인 모두 재사용할 수 없습니다.</div>
            <div className="user_withdraw_text"> 2. 탈퇴 후 회원정보와 개인형 서비스가 아래와 같이 삭제되며 삭제된 데이터는 복구되지 않습니다.</div>
            <div className="user_withdraw_text strong"> - 회원 정보</div>
            <div className="user_withdraw_text strong"> - 구독 정보</div>
            <div className="user_withdraw_text"> 탈퇴 후 문의주신 내용은 삭제되지 않고 유지됩니다. 문의 내용 삭제를 원하는 경우 반듯이 삭제 요청 후 탈퇴를 신청해주세요.</div>
            <hr/>
            <div className="user_withdraw_btn_div"><button className="user_withdraw_btn" onClick={handleWithdraw}> V 회원탈퇴</button></div>
        </div>
    )
}

const user_contents=[
    {title:'profile', description:<User_profile/>},
    {title:'edit', description:<User_edit/>},
    {title:'manage', description:<User_manage/>},
    {title:'bascket', description:<User_bascket/>},
    {title:'withdraw', description:<User_withdraw/>}
]

function User_content(){
    var params = useParams();
    var user_nav = params.user_nav;
    var selected_category ={
        title : 'sorry',
        description : "No Script"
    }

    for(let i = 0 ; i < user_contents.length ; i++){
        if(user_contents[i].title === user_nav){
            selected_category = user_contents[i];
            break;
        }
    }

    return(
        <div>
            <h2>{selected_category.description}</h2>
        </div>


    )
}

function User(){

    return(
        <div>
            <div className="user_container">

                <div className="user_navbar">
                    <ul className="user_navbar_list">
                        <h2 className="user_title">마이 페이지</h2>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/profile"> 프로필</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/edit"> 프로필 수정</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/manage"> 구독 관리</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/bascket"> 장바구니</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/withdraw"> 회원 탈퇴</Link></li>
                    </ul>
                </div>

                <div className="user_content">
                    <Routes>
                        <Route path="/:user_nav" element={< User_content/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

//메인 마이페이지
const contents = [
    {title:'user', description:<User/>},
    {title:'company', description:<Company/>},
]

function Mypage_content(){
    var params = useParams();
    var mypage_id = params.mypage_id;
    var selected_category ={
        title : 'sorry',
        description : "No Script"
    }

    for(let i = 0 ; i < contents.length ; i++){
        if(contents[i].title === mypage_id){
            selected_category = contents[i];
            break;
        }
    }

    return(
        <div>
            <h2>{selected_category.description}</h2>
        </div>

    )

}

function Mypage(){

    const userlogin = useContext(Userlogin);
    const navigate = useNavigate();

    const [login_role,setLogin_role] =useState("");

    useEffect(() => {
        if(localStorage.getItem("role") !== null){
            if(localStorage.getItem("role") === "E")
                setLogin_role("/company");
            else{
                setLogin_role("/user");
            }
        }else{
            navigate("/login");
        }
    },[])

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/:mypage_id/*" element={<Mypage_content/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Mypage;