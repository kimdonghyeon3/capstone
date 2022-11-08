import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Link, Routes, Route, useParams, useLocation, useNavigate, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import './category.css';
import axios from "axios";

function ProductHTML(props){

    const path = props.list.imageFilePath + props.list.imageFileName;

    // console.log(path + " /// " +  typeof path);

    return(
        <div className="product_container">
            <div className="product">
                <div className="product_img_div"><Link className="product_link" target="_blank" to={"/product/detail/" + props.list.pdid}><img
                    src={require("./img/aa.jpg")}
                    className="product_img"/>
                </Link></div>
                <div className="product_txt">&nbsp; {props.list.productName}
                    <div>&nbsp;{props.list.detail}</div>
                    <div>&nbsp;{"월"}</div>
                    <div>&nbsp;{props.list.price}</div>
                </div>
            </div>
        </div>
    )
}

function Category_content_main(){

    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        await axios
            .get(baseUrl + "/category/main")
            .then((response) => {
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    return(
            <div>
                   <div className="product_container_container" id="product_container_container">
                       {productList ? productList.map( list => {
                           return(
                               <ProductHTML list={list} key={list.pdid}></ProductHTML>
                           )
                       }) : ""}
                   </div>
               </div>)
}

function Category_content_lifestyle(){
    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        console.log("life style 값받아오기")
        await axios
            .post(baseUrl + "/category/select",{
                category : "라이프스타일",
            })
            .then((response) => {
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            {/*상품 리스트*/}
            <div className="product_container_container" id="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductHTML list={list} key={list.pdid}></ProductHTML>
                    )
                }) : ""}
            </div>
        </div>
    )
}

function Category_content_content(){
    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        console.log("content style 값받아오기")
        await axios
            .post(baseUrl + "/category/select",{
                category : "컨텐츠",
            })
            .then((response) => {
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            {/*상품 리스트*/}
            <div className="product_container_container" id="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductHTML list={list} key={list.pdid}></ProductHTML>
                    )
                }) : ""}
            </div>
        </div>
    )
}

function Category_content_food(){
    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        console.log("음식 style 값받아오기")
        await axios
            .post(baseUrl + "/category/select",{
                category : "음식",
            })
            .then((response) => {
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            {/*상품 리스트*/}
            <div className="product_container_container" id="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductHTML list={list} key={list.pdid}></ProductHTML>
                    )
                }) : ""}
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
    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        await axios
            .get(baseUrl + "/category/sale")
            .then((response) => {
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    return(
        <div>
            <div className="product_container_container" id="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductHTML list={list} key={list.pdid}></ProductHTML>
                    )
                }) : ""}
            </div>
        </div>)
}

function Category_content_search(){
    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();
    const url = window.location.pathname.split('/').pop();

    let value = "";

    if(document.getElementById("searchText") == null){
        value = "";
    }else{
        value = document.getElementById("searchText").value;
    }

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[url]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        console.log("search 가져오기")
        await axios
            .post(baseUrl + "/category/search",{
                target : value,
            })
            .then((response) => {
                console.log("아무것도 안가져오면 어떻게 되니?")
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            <div className="product_container_container" id="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductHTML list={list} key={list.pdid}></ProductHTML>
                    )
                }) : ""}
            </div>
        </div>)
}

function HadleSearch(){
    const baseUrl = "http://localhost:8080";

    var productList;

    let value = "";

    if(document.getElementById("searchText") == null){
        value = "";
    }else{
        value = document.getElementById("searchText").value;
    }

    getProductInfo();

    async function getProductInfo(){            //spring 연동 값 받아오기
        console.log("search 가져오기")
        await axios
            .post(baseUrl + "/category/search",{
                target : value,
            })
            .then((response) => {
                console.log("아무것도 안가져오면 어떻게 되니?")
                console.log(response.data);
                productList = (response.data);
                let map = productList.map(list => {
                    var props = {
                        list : list,
                        key : list.pdid,
                    }
                    let productHTML = ProductHTML(props);

                    var html = "<div className=\"product_container\">";
                    html+= "<div className=\"product\">";
                    html+= "<div className=\"product_img_div\">";
                    html+= "<Link className=\"product_link\" target=\"_blank\" to={\"/product/detail/\"" + list.pdid + "}>";
                    html+= "<img src={require(\`./img/aa.jpg\`).default} className=\"product_img\"/>";
                    html+= "</Link>";
                    html+= "</div>";
                    html+= "<div className=\"product_txt\">" + list.productName;
                    html+= "<div>" + list.detail + "</div>";
                    html+= "<div> 월 </div>";
                    html+= "<div>" + list.price + "</div>";
                    html+= "</div></div></div>";

                    console.log(html);

                    // <div className="product_container">
                    //     <div className="product">
                    //         <div className="product_img_div">
                    //         <Link className="product_link" target="_blank" to={"/product/detail/" + props.list.pdid}>
                    //         <img src={require("./img/aa.jpg")} className="product_img"/>
                    //         </Link>
                    //         </div>
                    //         <div className="product_txt">{props.list.productName}
                    //             <div>&nbsp;{props.list.detail}</div>
                    //             <div>&nbsp;{"월"}</div>
                    //             <div>&nbsp;{props.list.price}</div>
                    //         </div>
                    //     </div>
                    // </div>
                    let element = document.getElementById("product_container_container");

                    element.innerHTML = html;

                    //element.innerHTML = html;
                    });

            })
            .catch((error)=>{
                console.log(error);
            })
    }
    console.log(productList);

    let element = document.getElementById("product_container_container");

    // element.innerHTML = categoryContentSearch;


}

const contents_detail = [
    {title:'life', description:"생활"},
    {title:'membership', description:"멤버쉽"},
    {title:'health', description:"건강"},
    {title:'book', description:"도서"},
    {title:'music', description:"음악"},
    {title:'video', description:"영상"},
    {title:'bread', description:"빵"},
    {title:'milk', description:"유제품"},
    {title:'juk', description:"죽"},
    {title:'search', description:""},
]

function Category_content_detail(props){

    let detail = "";

    for(let i = 0 ; i < contents_detail.length ; i++){
        if(contents_detail[i].title === props.detail){
            detail = contents_detail[i].description
            break;
        }
    }

    if(props.detail === "search"){
        console.log(document.getElementById("searchText").value)
        detail.description = document.getElementById("searchText").value;
    }

    const baseUrl = "http://localhost:8080";

    const [productList, setProductList] = useState();

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[detail]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        await axios
            .post(baseUrl + "/category/detail",{
                detailcategory : detail,
            })
            .then((response) => {
                console.log(response.data)
                setProductList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div>
            {/*상품 리스트*/}
            <div className="product_container_container" id="product_container_container">
                {productList ? productList.map( list => {
                    return(
                        <ProductHTML list={list} key={list.pdid}></ProductHTML>
                    )
                }) : ""}
            </div>
        </div>
    )
}

const contents = [
    {title:'main', description:<Category_content_main/>},
    {title:'lifestyle', description:<Category_content_lifestyle/>},
    {title:'content', description:<Category_content_content/>},
    {title:'food', description:<Category_content_food/>},
    {title:'best', description:<Category_content_best/>},
    {title:'sale_event', description:<Category_content_sale_event/>},
    {title:'search', description:<Category_content_search/>}
]

function Category_content(){

    var params = useParams();
    var category_id = params.category_id;
    var categoryDetail_id = params.categoryDetail_id;
    var search_item = params.search_item;

    var selected_category ={
        title : 'sorry',
        description : <Category_content_main/>
    }

    if(categoryDetail_id !== undefined){
            selected_category.description = <Category_content_detail detail={categoryDetail_id}/>;
    }else if(search_item !== undefined){
        console.log("여긴 되는가요?");
        selected_category.description = <Category_content_search/>;
    }else{
        for(let i = 0 ; i < contents.length ; i++){
            if(contents[i].title === category_id){
                selected_category = contents[i];
                break;
            }
        }
    }

    return(
        <div>
            <h2>{selected_category.description}</h2>
        </div>
    );
}


function Category(){


    const [searchInput, setSearchInput] = useState();
    const baseUrl = "/category/search/"


    const searchChange = (e) => {
        console.log(e.target.value)
        setSearchInput(e.target.value);
    }

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
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle/membership'>멤버쉽</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/lifestyle/health'>건강</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/book'>도서</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/music'>음악</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/content/video'>영상</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/food/bread'>빵</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/food/milk'>유제품</Link></li>
                                    <li className="category_sub_item"><Link className='category_link' to='/category/food/juk'>죽</Link></li>
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
                            <ul className="category_list6">
                            <li>
                                <input className="search_bar search__input" type="text" id="searchText" name="searchText" onChange={searchChange} placeholder="Search"/>
                                {/*<button onClick={HadleSearch}>검색</button>*/}
                                <Link to={baseUrl+searchInput}>검색</Link>
                            </li>
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

                <div className="my_ss_product">
                <div className="sub_logo">문앞에</div>
                    <hr className="sun"size="5" width="107%" color="black"/>

                </div>

                <Routes>
                    <Route path="/:category_id" element={<Category_content/>}></Route>
                    <Route path="/lifestyle/:categoryDetail_id" element={<Category_content/>}></Route>
                    <Route path="/content/:categoryDetail_id" element={<Category_content/>}></Route>
                    <Route path="/food/:categoryDetail_id" element={<Category_content/>}></Route>
                    <Route path="/search/:search_item" element={<Category_content/>}></Route>
                </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
    )
}

export default Category;