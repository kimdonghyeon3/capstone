import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Link, Routes, Route, useParams, useNavigate, useLocation} from "react-router-dom";
import React, {useContext, useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import './category.css';

function Category_content_main(){

    return(<div>

        <div className="product_container">
            <div className="product">
                <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
            </div>

            <div className="product">
                <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
            </div>

            <div className="product">
                <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
            </div>

            <div className="product">
                <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
            </div>

            <div className="product">
                <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
            </div>

            <div className="product">
                <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
            </div>

        </div>
    </div>)
}

function Category_content_lifestyle(){

    return(
        <div>

            {/*라이프스타일 네비바*/}
            <div className="category_sub_navbar">
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/lifestyle/life">생활</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/lifestyle/life">멤버쉽</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/lifestyle/life">건강</Link></div>
            </div>

            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

        </div>
    )
}

function Category_content_content(){
    return(
        <div>
            {/*컨텐츠 네비바*/}
            <div className="category_sub_navbar">
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/book">도서</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/music">음악</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/video">영상</Link></div>
            </div>

            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

        </div>
    )
}

function Category_content_food(){
    return(
        <div>

            {/*음식 네비바*/}
            <div className="category_sub_navbar">
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/bread">빵</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/milk">유제품</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/juk">죽</Link></div>
            </div>

            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

        </div>
    )
}

function Category_content_best(){
    return(<div>
        <div className="cat_content">

            <h2 className="category_name lifestyle"> 라이프 스타일 </h2>
            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

            <h2 className="category_name content"> 컨텐츠 </h2>
            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

            <h2 className="category_name food"> 음식 </h2>
            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

        </div>
    </div>)
}

function Category_content_sale_event(){
    return(<div>
        <div className="cat_content">

            <h2 className="category_name lifestyle"> 라이프 스타일 </h2>
            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

            <h2 className="category_name content"> 컨텐츠 </h2>
            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

            <h2 className="category_name food"> 음식 </h2>
            {/*상품 리스트*/}
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

                <div className="product">
                    <div className="product_img_div"><img src={require("./img/product_img.png")} className="product_img"/></div>
                    <h5 className="product_title"> 상품 제목</h5>
                    <p className="product_des"> 상품 내용 요약</p>
                    <div className="product_mon"> 월 : 15,000￦</div>
                    <div className="product_link_div"><Link className="product_link" to="/product/detail"> 구독하러가기</Link></div>
                </div>

            </div>

        </div>
    </div>)
}

const contents = [
    {id:1, title:'main', description:<Category_content_main/>},
    {id:2, title:'lifestyle', description:<Category_content_lifestyle/>},
    {id:3, title:'content', description:<Category_content_content/>},
    {id:4, title:'food', description:<Category_content_food/>},
    {id:5, title:'best', description:<Category_content_best/>},
    {id:6, title:'sale_event', description:<Category_content_sale_event/>}
]

function Category_content(props){

    var params = useParams();
    var category_id = params.category_id;

    var selected_category ={
        title : 'sorry',
        description : <Category_content_main/>
    }

    for(let i = 0 ; i < contents.length ; i++){
        if(contents[i].title === category_id){
            selected_category = contents[i];
            break;
        }
    }

    return(
        <div>
            <h2>{selected_category.description}</h2>
        </div>
    );
}

function Category({children}){

    return(
            <div>
                <Header/>

                {/* 캐로셀 이미지 참고*/}
                <div className="carousel">
                    <Carousel id="carousel_container">
                        <Carousel.Item className="carousel_item">
                            <img
                                className="d-block w-100"
                                src={require("./img/ad1.png")}
                                alt="First slide"
                                height="300"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("./img/ad2.png")}
                                alt="Second slide"
                                height="300"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("./img/ad3.png")}
                                alt="Third slide"
                                height="300"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="category_layout">
                {/*카테고리 navbar*/}
                <div className="category_navbar">
                    <nav className="category_container">
                        <ul className="category_list">
                            <li className="category_item dropdown"><Link className='category_link' to="/category/main">카테고리</Link>
                                <ul className="category_sub_list">
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle'>라이프스타일</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content'>컨텐츠</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/food'>음식</Link></li>
                                </ul>
                            </li>
                            <li className="category_item"><Link className='category_link' to="/category/best">베스트</Link></li>
                            <li className="category_item"><Link className='category_link'to="/category/sale_event">할인/이벤트</Link></li>
                        </ul>
                        {/*<div className="search"><Link className="link" to="/"><BsSearch/>검색</Link></div>*/}
                    </nav>
                </div>

                <div className="category_layout_right">

                {/* 검색 */}
                <div className="search_product">
                </div>

                {/* 내가 구독한 상품*/}
                <div className="my_ss_product">
                    <h2> 내가 구독한 상품</h2>
                </div>

                <Routes>
                    <Route path="/:category_id" element={<Category_content/>}></Route>
                </Routes>
                    </div>
                </div>

                <Footer/>
            </div>
    )
}

export default Category;