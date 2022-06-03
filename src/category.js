import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Link, Routes, Route, useParams, useNavigate, useLocation} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import './category.css';
import axios from "axios";

function Category_content_main(){

    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState({});

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        await axios
            .get(baseUrl + "/category/main")
            .then((response) => {
                console.log(response.data);
                console.log(response.data.length);
                console.log(response.data[0]);

                for(let i = 0 ; i < response.data.length ; i ++){
                    setProductList({
                        ...productList,
                        ["p" + String(i)]:response.data[i],
                    })
                }

            })
            .catch((error)=>{
                console.log(error);
            })
    }

    // useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
    //     productInfode();
    // },[productList]);
    //
    // const productInfode = () => {
    //
    //     const product = '';
    //
    //     for(let i = 0 ; i < productList.size ; i++){
    //         // product = {"<img src=" + {require({productList.p1.imageFilePath} + "/" + {productList.p1.imageFileName}}/>"}
    //     }
    //
    //     return(
    //         {product}
    //             )
    // }

    return(<div>
                   <div className="product_container_container">
                       <div className="product_container">
                           <div className="product">
                               <div className="product_img_div"><Link className="product_link" to="/product/detail"><img src={require("./img/aa.jpg")} className="product_img"/></Link></div>
                               <div className="product_txt">&nbsp; 상품설명</div>
                           </div>
                       </div>

                       <div className="product_container">
                           <div className="product">
                               <div className="product_img_div"><Link className="product_link" to="/product/detail"><img src={require("./img/aa.jpg")} className="product_img"/></Link></div>
                               <div className="product_txt">&nbsp; 상품설명</div>
                           </div>
                       </div>

                       <div className="product_container">
                           <div className="product">
                               <div className="product_img_div"><Link className="product_link" to="/product/detail"><img src={require("./img/aa.jpg")} className="product_img"/></Link></div>
                               <div className="product_txt">&nbsp; 상품설명</div>
                           </div>
                       </div>

                   </div>
               </div>)
}

function Category_content_lifestyle(){

    return(
        <div>

            {/*라이프스타일 네비바*/}
            {/* <div className="category_sub_navbar">
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/lifestyle/life">생활</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/lifestyle/life">멤버쉽</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/lifestyle/life">건강</Link></div>
            </div> */}

            {/*상품 리스트*/}
            <div className="product_container">
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
            {/* <div className="category_sub_navbar">
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/book">도서</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/music">음악</Link></div>
                <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/video">영상</Link></div>
            </div> */}

            {/*상품 리스트*/}
            <div className="product_container">
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
             {/* <div className="category_sub_navbar">
                 <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/bread">빵</Link></div>
                 <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/milk">유제품</Link></div>
                 <div className="category_sub_link_div"><Link className="category_sub_link" to="/category/content/juk">죽</Link></div>
             </div> */}

             {/*상품 리스트*/}
             <div className="product_container">
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

                {/*카테고리 navbar*/}
                <div className="category_navbar">
                    <nav className="category_container">
                        <ul className="category_list1">
                            <li className="category_item dropdown"><Link className='category_link' to="/category/main">카테고리 전체보기</Link>
                                <ul className="category_sub_list">
                                    <li> &nbsp;</li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle'>라이프스타일</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content'>컨텐츠</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/food'>음식</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle/life'>생활</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle/life'>멤버쉽</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle/life'>건강</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/book'>도서</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/music'>음악</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/video'>영상</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/bread'>빵</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/milk'>유제품</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/juk'>죽</Link></li>
                                </ul>
                            </li>
                            </ul>
                            <ul className="category_list2">
                                    <li className="category_item"><Link className='category_link' to="/category/best">베스트</Link></li>
                            </ul>
                            <ul className="category_list3">
                                    <li className="category_item"><Link className='category_link'to="/category/sale_event">할인/이벤트</Link></li>
                            </ul>

                            <ul className="category_list4">
                                    <li className="category_item"><Link className='category_link'to="/category/sale_event">신상품</Link></li>
                            </ul>

                            <ul className="category_list5">
                                    <li className="category_item"><Link className='category_link'to="/category/sale_event">매거진</Link></li>
                            </ul>

                        {/*<div className="search"><Link className="link" to="/"><BsSearch/>검색</Link></div>*/}
                    </nav>

                </div>

                <div className="category_layout">

                <hr className="sun2"size="3" width="104%" color="black"/>

                {/* 캐로셀 이미지 참고*/}
                <div className="carousel">
                    <Carousel id="carousel_container">
                        <Carousel.Item className="carousel_item">
                            <img
                                className="d-block w-100"
                                src={require("./img/car1.png")}
                                alt="First slide"
                                height="500"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("./img/car2.png")}
                                alt="Second slide"
                                height="500"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("./img/ad3.png")}
                                alt="Third slide"
                                height="500"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="category_layout_right">

                {/* 검색 */}
                <div className="search_product">

                </div>

                {/* 내가 구독한 상품*/}
                <div className="my_ss_product">
                <div className="sub_logo">문앞에</div>
                    <hr className="sun"size="5" width="107%" color="black"/>

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