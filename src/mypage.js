import React from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import {Row, Tab, Col, Nav} from "react-bootstrap";
import './mypage.css';

const contents = [
    {id:1, title:'user', description:<User/>},
    {id:2, title:'company', description:<Company/>},
]

function Company(){

    return(
        <div>
            <h2> 기업 마이페이지</h2>
        </div>
    )
}

function User_profile(){

    return(
        <div>
            <h2 className="user_profile_h2"> 기본정보</h2>
            <hr/>
            <dl>
                <dt className="user_profile_dt"><label>사용자명</label></dt>
                <dd className="user_profile_dd"><span>사용자명</span></dd>
                <dt className="user_profile_dt"><label>이메일</label></dt>
                <dd className="user_profile_dd"><span>사용자명</span></dd>
                <dt className="user_profile_dt"><label>아이디</label></dt>
                <dd className="user_profile_dd"><span>사용자명</span></dd>
                <dt className="user_profile_dt"><label>생년월일</label></dt>
                <dd className="user_profile_dd"><span>사용자명</span></dd>
                <dt className="user_profile_dt"><label>전화번호</label></dt>
                <dd className="user_profile_dd"><span>사용자명</span></dd>
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

    return(
        <div>
            <Header></Header>
            <h2> 마이페이지</h2>
            <ul>
                <li><Link to="/mypage/user"> 유저 마이페이지</Link></li>
                <li><Link to="/mypage/company">기업 마이페이지</Link></li>
            </ul>

            <Routes>
                <Route path="/:mypage_id/*" element={< Mypage_content/>}></Route>
            </Routes>

            <Footer/>

        </div>
    )
}

export default Mypage;