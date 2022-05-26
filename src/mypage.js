import React, {useContext, useEffect, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';
import './mypage.css';
import {Userlogin} from "./userinfo";
import axios from "axios";

//기업페이지
function Company_profile(){
    const baseUrl = "http://localhost:8080";

    const logininfo = useContext(Userlogin);

    const [companyinfo, setCompanyinfo] = useState({
        enid:logininfo.uid,
        // enterpriseId:logininfo.id,
        // role:logininfo.role,
    });

    const[companyprofile, setCompnayprofile] = useState({});

    useEffect(()=>{
        console.log("마이페이지 유저 정보 받아오기");
        getcompanyinfo();
    },[]);

    async function getcompanyinfo(){

        await axios
            .post(baseUrl + "/mypage/company/profile", companyinfo)
            .then((response) => {
                console.log(response.data);

            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            <h2 className="user_profile_h2"> 기본정보</h2>
            <hr/>
            <dl>
                <dt className="user_profile_dt"><label>아이디</label></dt>
                <dd className="user_profile_dd"><span>아이디</span></dd>
                <dt className="user_profile_dt"><label>비밀번호</label></dt>
                <dd className="user_profile_dd"><span>비밀번호</span></dd>
                <dt className="user_profile_dt"><label>기업명</label></dt>
                <dd className="user_profile_dd"><span>기업명</span></dd>
                <dt className="user_profile_dt"><label>사업자번호</label></dt>
                <dd className="user_profile_dd"><span>사업자번호</span></dd>
                <dt className="user_profile_dt"><label>이메일</label></dt>
                <dd className="user_profile_dd"><span>이메일</span></dd>
                <dt className="user_profile_dt"><label>전화번호</label></dt>
                <dd className="user_profile_dd"><span>전화번호</span></dd>
                <dt className="user_profile_dt"><label>주소</label></dt>
                <dd className="user_profile_dd"><span>주소</span></dd>
                <dt className="user_profile_dt"><label>계좌번호</label></dt>
                <dd className="user_profile_dd"><span>계좌번호</span></dd>
            </dl>
        </div>
    )
}

function Company_edit(){
    const baseUrl = "http://localhost:8080";

    const logininfo = useContext(Userlogin);

    const [companyinfo, setCompanyinfo] = useState({
        enid:logininfo.uid,
    });
    const[edit_company, setEdit_company] = useState({
        id:logininfo.uid,
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
        console.log("??");

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
                    // if(response.data.message === 'Success'){
                    //
                    // }else{
                    //     alert("오류났습니다.");
                    // }
                })
                .catch((error) => {
                    console.log(error);
                })
    }

    return(

    <div>
        <h2 className="company_profile_h2"> 기업 프로필</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
        <dl>
            <dt className="user_profile_dt"><label>기업명</label></dt>
            <dd className="user_edit_dd">
                <input className="user_enroll_text" placeholder={edit_company.enterpriseName}  type="text" required={true} name="e_name" onChange={handleInput} value={edit_company.e_name}/>
                </dd>
            <dt className="user_profile_dt"><label>이메일</label></dt>
            <dd className="user_edit_dd">
                <input className="user_enroll_text" placeholder={edit_company.email} type="text" required={true} name="e_email" onChange={handleInput} value={edit_company.e_email}/>
                </dd>
            <dt className="user_profile_dt"><label>주소</label></dt>
            <dd className="user_edit_dd">
                <input className="user_enroll_text" placeholder={edit_company.address}  type="text" required={true} name="e_address" onChange={handleInput} value={edit_company.address}/>
                </dd>
            <dt className="user_profile_dt"><label>상담번호</label></dt>
            <dd className="user_edit_dd">
                <input className="user_enroll_text" placeholder={edit_company.phoneNumber}  type="text" required={true} name="e_phonenumber" onChange={handleInput} value={edit_company.phoneNumber}/>
                </dd>
            <dt className="user_profile_dt"><label>계좌번호</label></dt>
            <dd className="user_edit_dd">
                <input className="user_enroll_text" placeholder={edit_company.accountNumber}  type="text" required={true} name="e_accountnumber" onChange={handleInput} value={edit_company.accountNumber}/>
            </dd>
            <dt className="user_profile_dt"><label>은행</label></dt>
            <dd className="user_edit_dd">
                <select name="e_bankname" onChange={handleInput}>
                    <option value="none"> 은행 </option>
                    <option value="우리은행">우리은행</option>
                    <option value="KB국민은행">KB국민은행</option>
                    <option value="신한은행">신한은행"</option>
                    <option value="하나은행">하나은행</option>
                    <option value="NH농협은행">NH농협은행</option>
                    <option value="Sh수협은행">Sh수협은행</option>
                    <option value="SC제일은행">SC제일은행</option>
                    <option value="한국씨티은행">한국씨티은행</option>
                </select>            </dd>
            <dt className="user_profile_dt"><label>비밀번호</label></dt>
            <dd className="user_edit_dd">
                <input className="user_enroll_text" placeholder={edit_company.password}  type="text" required={true} name="e_password" onChange={handleInput} value={edit_company.e_password}/>
            </dd>
            <button type="submit" className="user_edit_btn"> 변경 </button>
        </dl>
        </form>
    </div>
    )
}

function Company_manage(){
    return(
        <div>
            <h2 className="company_profile_h2"> 등록 상품 관리</h2>
            <hr/>
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 수정하기 </button></div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 수정하기 </button></div>
                </div>
            </div>
            <div className="company_product_enroll_div"><button className="company_product_enroll_btn">상품 등록하러 가기</button></div>
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

function Company_product(){

    const [fileimage, setFileimage] = useState();

    const saveFileImage = (event)=>{
        setFileimage(URL.createObjectURL(event.target.files[0]));
    }

    const deleteFileImage = (event) => {
        URL.revokeObjectURL(fileimage);
        setFileimage("");
    }
    return(
        <div>
            <h2 className="company_profile_h2"> 상품 등록 페이지</h2>
            <hr/>
            <form>
                <p> 대표 사진 업로드 </p>
                <div>{fileimage && (<img alt="preview" src={fileimage}/>)}
                <button onClick={() => deleteFileImage()}> 삭제 </button>
                </div>
                <input type="file" accept="image/*" onChange={saveFileImage}></input>
            <p> 상평명 </p>
            <p> 카테고리설정 </p>
            <p> 월/가격 및 옵션 </p>
            <p> 상담번호 </p>
            <p> 사업장 주소 </p>
            <p> 상품 상세 설명 </p>
            </form>
        </div>
    )
}

const company_content=[
    {id:1, title:'profile', description:<Company_profile/>},
    {id:1, title:'edit', description:<Company_edit/>},
    {id:2, title:'manage', description:<Company_manage/>},
    {id:1, title:'deliver', description:<Company_deliver/>},
    {id:2, title:'product', description:<Company_product/>},
]

function Company(){

    return(
        <div>
            <div><h2 className="User_title"> 기업 마이페이지</h2></div>

            <div className="user_container">

                <div className="user_navbar">
                    <ul className="user_navbar_list">
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/profile"> 기업 프로필</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/edit"> 기업 프로필 수정</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/manage"> 상품 관리</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/deliver"> 배송 조회</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/company/product"> 상품 등록</Link></li>
                    </ul>
                </div>

                <div className="user_content">
                    <Routes>
                        <Route path="/:company_nav" element={< Company_content/>}></Route>
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
        description : "No Script"
    }
    console.log("real national main : ",selected_category);
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
        enid:logininfo.uid,
        enterpriseId:logininfo.id,
        role:logininfo.role,
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
                console.log("씨발1");
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
                console.log("씨발");
                console.log(error);
            })
    }

    return(
        <div>
            <h2 className="user_profile_h2"> 기본정보</h2>
            <hr/>
            <dl>
                <dt className="user_profile_dt"><label>사용자명</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.userName}</span></dd>
                <dt className="user_profile_dt"><label>이메일</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.email}</span></dd>
                <dt className="user_profile_dt"><label>아이디</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.userId}</span></dd>
                <dt className="user_profile_dt"><label>생년월일</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.birth}</span></dd>
                <dt className="user_profile_dt"><label>전화번호</label></dt>
                <dd className="user_profile_dd"><span>{userprofile.phoneNumber}</span></dd>
            </dl>
        </div>
    )
}

function User_edit(){

    return(
        <div>
            <h2 className="user_profile_h2"> 프로필 수정</h2>
            <hr />
            <dl>
                <dt className="user_profile_dt"><label>사용자명</label></dt>
                <dd className="user_edit_dd"><input type="text" placeholder="사용자명"></input>
                    <button type="button" className="user_edit_btn"> 변경 </button></dd>
                <dt className="user_profile_dt"><label>이메일</label></dt>
                <dd className="user_edit_dd"><input type="text" placeholder="이메일"></input>
                    <button type="button" className="user_edit_btn"> 변경 </button></dd>
                <dt className="user_profile_dt"><label>아이디</label></dt>
                <dd className="user_edit_dd"><input type="text" placeholder="아이디"></input>
                    <button type="button" className="user_edit_btn"> 변경 </button></dd>
                <dt className="user_profile_dt"><label>생년월일</label></dt>
                <dd className="user_edit_dd"><input type="text" placeholder="생년월일"></input>
                    <button type="button" className="user_edit_btn"> 변경 </button></dd>
                <dt className="user_profile_dt"><label>전화번호</label></dt>
                <dd className="user_edit_dd"><input type="text" placeholder="전화번호"></input>
                    <button type="button" className="user_edit_btn"> 변경 </button></dd>
            </dl>
        </div>
    )
}

function User_manage(){

    return(
        <div>
            <h2 className="user_profile_h2"> 구독 관리</h2>
            <hr />
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 해지 </button></div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 해지 </button></div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 해지 </button></div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 해지 </button></div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 해지 </button></div>
                </div>
            </div>
        </div>
    )
}

function User_bascket(){

    return(
        <div>
            <h2 className="user_profile_h2"> 장바구니</h2>
            <hr/>
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 하러가기 </button></div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><button className="product_th_btn"> 구독 하러가기 </button></div>
                </div>
            </div>
        </div>
    )
}

function User_withdraw(){

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
            <div className="user_withdraw_btn_div"><button className="user_withdraw_btn"> V 회원탈퇴</button></div>
        </div>
    )
}

const user_contents=[
    {id:1, title:'profile', description:<User_profile/>},
    {id:2, title:'edit', description:<User_edit/>},
    {id:1, title:'manage', description:<User_manage/>},
    {id:2, title:'bascket', description:<User_bascket/>},
    {id:1, title:'withdraw', description:<User_withdraw/>}
]

function User_content(){
    var params = useParams();
    var user_nav = params.user_nav;
    var selected_category ={
        title : 'sorry',
        description : "No Script"
    }
    console.log("real national main : ",selected_category);
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
            <div><h2 className="User_title"> 유저 마이페이지</h2></div>

            <div className="user_container">

                <div className="user_navbar">
                    <ul className="user_navbar_list">
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/profile"> 내 프로필</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/edit"> 프로필 수정</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/manage"> 구독 관리</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/bascket"> 장바구니</Link></li>
                        <li className="user_navbar_li"><Link className="user_navbar_link" to="/mypage/user/withdraw"> 회원 탈퇴</Link></li>
                    </ul>
                </div>

                <div className="user_content">
                    <Routes>
                        <Route path="/:user_nav" element={< User_content/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}


//메인 마이페이지
const contents = [
    {id:1, title:'user', description:<User/>},
    {id:2, title:'company', description:<Company/>},
]

function Mypage_content(){
    var params = useParams();
    var mypage_id = params.mypage_id;
    var selected_category ={
        title : 'sorry',
        description : "No Script"
    }
    console.log("mypage_content : ",selected_category);
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
    // console.log(userlogin.uid);
    // console.log(userlogin.id);
    // console.log(userlogin.role);
    // console.log(userlogin.login);

    const [login_role,setLogin_role] =useState("");

    useEffect(() => {

        if(userlogin.login){

            if(userlogin.role === "E")
                setLogin_role("/company");
            else{
                setLogin_role("/user");
            }
        }else{
            // console.log("여기?");
            navigate("/login");
        }
    },[])


    return(
        <div>
            <Header></Header>
            {/*<h2> 마이페이지</h2>*/}
            {/*<ul>*/}
            {/*    <li><Link to="/mypage/user"> 유저 마이페이지</Link></li>*/}
            {/*    <li><Link to="/mypage/company">기업 마이페이지</Link></li>*/}
            {/*</ul>*/}

            {/*{login_role === "user" ? < User/>:< Company/> }*/}

            {/*<Routes>*/}
            {/*    /!*<Route path={"/" + } element={< Mypage_content/>}></Route>*!/*/}
            {/*    <Route path={login_role === "user" ? "/user":"/company"} element={login_role === "user" ? < User/>:< Company/> }></Route>*/}

            {/*</Routes>*/}

            <Routes>
                <Route path="/:mypage_id/*" element={<Mypage_content/>}/>
            </Routes>

            <Footer/>

        </div>
    )
}

export default Mypage;