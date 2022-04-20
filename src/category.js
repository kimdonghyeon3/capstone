import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Link, Routes, Route, useParams} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import {Button} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import './category.css';
import Mypage from "./mypage";
import Login from "./login";

function Category_content_main(){

    return(<div>
        <div className="cat_content">
            {/* 구독 상품 리스트*/}
            <div className="star_product_total1">
                <ul className='star_product_list1'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>

            {/* 구독 상품 리스트*/}
            <div className="star_product_total">
                <ul className='star_product_list'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>
        </div>
    </div>)
}

function Category_content_lifestyle(){

    return(
        <div>
            {/*라이프스타일 네비바*/}
            <div className="lifestyle_btn_list">
            <Button variant="warning" id="lifestyle_btn">생활</Button>{' '}
            <Button variant="warning" id="lifestyle_btn">멤버쉽</Button>{' '}
            <Button variant="warning" id="lifestyle_btn">건강</Button>{' '}
            </div>

            <div className="cat_content">
                {/* 구독 상품 리스트*/}
                <div className="star_product_total1">
                    <ul className='star_product_list1'>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>

                    </ul>
                </div>

                {/* 구독 상품 리스트*/}
                <div className="star_product_total">
                    <ul className='star_product_list'>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

function Category_content_content(){
    return(
        <div>
            {/*라이프스타일 네비바*/}
            <div className="lifestyle_btn_list">
                <Button variant="warning" id="lifestyle_btn">도서</Button>{' '}
                <Button variant="warning" id="lifestyle_btn">음악</Button>{' '}
                <Button variant="warning" id="lifestyle_btn">영상</Button>{' '}
            </div>

            <div className="cat_content">
                {/* 구독 상품 리스트*/}
                <div className="star_product_total1">
                    <ul className='star_product_list1'>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>

                    </ul>
                </div>

                {/* 구독 상품 리스트*/}
                <div className="star_product_total">
                    <ul className='star_product_list'>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

function Category_content_food(){
    return(
        <div>
            {/*라이프스타일 네비바*/}
            <div className="lifestyle_btn_list">
                <Button variant="warning" id="lifestyle_btn">빵</Button>{' '}
                <Button variant="warning" id="lifestyle_btn">유제품</Button>{' '}
                <Button variant="warning" id="lifestyle_btn">죽</Button>{' '}
            </div>

            <div className="cat_content">
                {/* 구독 상품 리스트*/}
                <div className="star_product_total1">
                    <ul className='star_product_list1'>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>

                    </ul>
                </div>

                {/* 구독 상품 리스트*/}
                <div className="star_product_total">
                    <ul className='star_product_list'>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>
                        <li className='empty'></li>
                        <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                            <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                            <Card.Body>
                                <Card.Title>상품 제목</Card.Title>
                                <Card.Text>
                                    상품 요약
                                </Card.Text>
                                <Button variant="primary">구독하러가기</Button>
                            </Card.Body>
                        </Card></li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

function Category_content_best(){
    return(<div>
        <div className="cat_content">

            <h2 className="best_category lifestyle"> 라이프 스타일 </h2>
            {/* 구독 상품 리스트*/}
            <div className="star_product_total1">
                <ul className='star_product_list1'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>

            <h2 className="best_category content"> 컨텐츠 </h2>
            {/* 구독 상품 리스트*/}
            <div className="star_product_total">
                <ul className='star_product_list'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>

            <h2 className="best_category food"> 음식 </h2>
            {/* 구독 상품 리스트*/}
            <div className="star_product_total">
                <ul className='star_product_list'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>

        </div>
    </div>)
}

function Category_content_sale_event(){
    return(<div>
        <div className="cat_content">

            <h2 className="best_category lifestyle"> 라이프 스타일 </h2>
            {/* 구독 상품 리스트*/}
            <div className="star_product_total1">
                <ul className='star_product_list1'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>

            <h2 className="best_category content"> 컨텐츠 </h2>
            {/* 구독 상품 리스트*/}
            <div className="star_product_total">
                <ul className='star_product_list'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
            </div>

            <h2 className="best_category food"> 음식 </h2>
            {/* 구독 상품 리스트*/}
            <div className="star_product_total">
                <ul className='star_product_list'>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>
                    <li className='empty'></li>
                    <li className='star_product'><Card style={{ width: '15rem',padding : '10px' }}>
                        <Card.Img variant="top" src={require("./img/ad.png")} style={{height : '12rem'}} />
                        <Card.Body>
                            <Card.Title>상품 제목</Card.Title>
                            <Card.Text>
                                상품 요약
                            </Card.Text>
                            <Button variant="primary">구독하러가기</Button>
                        </Card.Body>
                    </Card></li>

                </ul>
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

function Category_content(){
    var params = useParams();
    var category_id = params.category_id;
    console.log('params.category_id ', params, params.category_id);

    var selected_category ={
        title : 'sorry',
        description : <Category_content_main/>
    }
    console.log("real national main : ",selected_category);
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

function Category(){

    return(
            <div>
                <Header/>
                <h2> 카테고리 페이지</h2>

                {/*카테고리 navbar*/}
                <div className="cat_nav">
                    <nav className="cat_navbar">
                        <ul className="cat_container">
                            <li className="cat_item"><Link className='link' to="/category/main">카테고리</Link>
                                <ul className="sub">
                                    <li className="sub_item"><Link className='sub_link' to='/category/lifestyle'>라이프스타일</Link></li>
                                    <li className="sub_item"><Link className='sub_link' to='/category/content'>컨텐츠</Link></li>
                                    <li className="sub_item"><Link className='sub_link' to='/category/food'>음식</Link></li>
                                </ul>
                            </li>
                            <li className="cat_item"><Link className='link' to="/category/best">베스트</Link></li>
                            <li className="cat_item"><Link className='link'to="/category/sale_event">할인/이벤트</Link></li>
                        </ul>
                        <div className="search"><Link className="link" to="/"><BsSearch/>검색</Link></div>
                    </nav>
                </div>

                {/* 캐로셀 이미지 참고*/}
                <div className="cat_carousel">
                <Carousel id="cat_carousel_inner">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./img/ad.png")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>광고 1 </h3>
                            <p>광고 1 comment.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./img/ad.png")}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>광고 2 </h3>
                            <p>광고 2 comment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./img/ad.png")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>광고 3</h3>
                            <p>광고 3 comment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

                {/* 내가 구독한 상품*/}
                <div className="my_ss_product">
                    <h2> 내가 구독한 상품</h2>
                </div>

                <Routes>
                    <Route path="/:category_id" element={<Category_content/>}></Route>
                </Routes>

                <Footer/>
            </div>
    )
}

export default Category;